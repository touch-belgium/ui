import slugify from "slugify";

export const state = () => ({
  category_name: "",
  pools: [],
  matches: [],
  bonuses: [],
  competitions: [],
  competition: null,
  table_fields: [
    {
      key: "team",
      label: "Team",
      sortable: false
    },
    {
      key: "points",
      label: "Points",
      sortable: true
    },
    {
      key: "bonus",
      label: "Bonus",
      sortable: false
    },
    {
      key: "played",
      label: "Played",
      sortable: true
    },
    {
      key: "won",
      label: "Won",
      sortable: true
    },
    {
      key: "lost",
      label: "Lost",
      sortable: true
    },
    {
      key: "drawn",
      label: "Drawn",
      sortable: true
    },
    {
      key: "tf",
      label: "TF",
      sortable: true
    },
    {
      key: "ta",
      label: "TA",
      sortable: true
    },
    {
      key: "td",
      label: "TD",
      sortable: true
    }
  ]
});

export const getters = {
  upcoming_competitions (state, getters) {
    return state.competitions.filter(c => new Date(c.start_date) > new Date()).sort((a, b) => {
      return new Date(a.start_date) < new Date(b.start_date) ? -1 : 1;
    });
  },
  domestic_competitions (state, getters) {
    return state.competitions.filter(c => !c.belgian_championship);
  },
  ongoing_domestic_competitions (state, getters) {
    return getters.domestic_competitions.filter(c => new Date(c.start_date) < new Date() &&
                                                new Date(c.end_date) > new Date());
  },
  upcoming_domestic_competitions (state, getters) {
    return getters.domestic_competitions.filter(c => new Date(c.start_date) > new Date()).sort((a, b) => {
      return new Date(a.start_date) < new Date(b.start_date) ? -1 : 1;
    });
  },
  past_domestic_competitions (state, getters) {
    return getters.domestic_competitions.filter(c => new Date(c.end_date) < new Date());
  },
  championships (state, getters) {
    return state.competitions.filter(c => c.belgian_championship);
  },
  ongoing_championships (state, getters) {
    return getters.championships.filter(c => new Date(c.start_date) < new Date() &&
                                        new Date(c.end_date) > new Date());
  },
  upcoming_championships (state, getters) {
    return getters.championships.filter(c => new Date(c.start_date) > new Date());
  },
  past_championships (state, getters) {
    return getters.championships.filter(c => new Date(c.end_date) < new Date());
  },


  // filtered_competitions (state, getters) {
  //   const patt = new RegExp(state.search_competition_box, "i");
  //   return getters.other_competitions.filter(c => patt.test(c.name));
  // },
  // paginated_competitions (state, getters) {
  //   return getters.filtered_competitions.slice(0, state.max_shown);
  // },
  // n_total_shown (state, getters) {
  //   return getters.paginated_competitions.length;
  // },
  invitational_team: (state, getters) => (team_name) => {
    // If all matches a team is playing are invitational, then that
    // team in invitational !
    return getters.relevant_matches(team_name).every(m => m.invitational_match);
  },
  official_matches (state, getters) {
    // Official matches are non-invitational
    return state.matches.filter(m => !m.invitational_match);
  },
  teams (state, getters) {
    const s = new Set();
    for (const match of state.matches) {
      s.add(match.home_team.name);
      s.add(match.away_team.name);
    }
    return [...s];
  },
  table_teams (state, getters) {
    // These are teams that appear on the table and are counted to
    // compute the scores. Invitational teams do not appear on the
    // table
    return getters.teams.filter(t => !getters.invitational_team(t));
  },
  home_matches: (state, getters) => (team_name) => getters.official_matches.filter(m => m.home_team.name == team_name),
  away_matches: (state, getters) => (team_name) => getters.official_matches.filter(m => m.away_team.name == team_name),
  relevant_matches: (state, getters) => (team_name) => state.matches.filter(m => m.home_team.name == team_name || m.away_team.name == team_name),
  relevant_official_matches: (state, getters) => (team_name) => getters.official_matches.filter(m => m.home_team.name == team_name || m.away_team.name == team_name),
  home_wins: (state, getters) => (acc, cur, idx, src) => cur.home_touchdowns > cur.away_touchdowns ? acc + 1 : acc,
  away_wins: (state, getters) => (acc, cur, idx, src) => cur.away_touchdowns > cur.home_touchdowns ? acc + 1 : acc,
  drawn: (state, getters) => (acc, cur, idx, src) => cur.home_touchdowns == cur.away_touchdowns ? acc + 1 : acc,
  with_bonus: (state, getters) => (team_name) => state.bonuses.find(b => b.team == team_name),
  home_td: (state, getters) => (acc, cur, idx, src) => acc + cur.home_touchdowns,
  away_td: (state, getters) => (acc, cur, idx, src) => acc + cur.away_touchdowns,
  team_name_to_row: (state, getters) => name => {
    const won = getters.home_matches(name).reduce(getters.home_wins, 0)
          + getters.away_matches(name).reduce(getters.away_wins, 0);
    const lost = getters.home_matches(name).reduce(getters.away_wins, 0)
          + getters.away_matches(name).reduce(getters.home_wins, 0);
    const drawn = getters.relevant_official_matches(name).reduce(getters.drawn, 0);
    const played = won + lost + drawn;
    const bonus = getters.with_bonus(name) ? getters.with_bonus(name).points : 0;
    const tf = getters.home_matches(name).reduce(getters.home_td, 0)
          + getters.away_matches(name).reduce(getters.away_td, 0);
    const ta = getters.home_matches(name).reduce(getters.away_td, 0)
          + getters.away_matches(name).reduce(getters.home_td, 0);
    return {
      team: name,
      points: won * state.competition.win_value +
        drawn * state.competition.tie_value +
        lost * state.competition.defeat_value +
        bonus,
      bonus,
      played,
      won,
      lost,
      drawn,
      tf,
      ta,
      td: tf - ta
    };
  },
  table_info (state, getters) {
    return getters.table_teams.map(t => getters.team_name_to_row(t));
  },
  filtered_matches: (state, getters) => (team_name) => {
    return team_name == null ? state.matches : getters.relevant_matches(team_name);
  }
};

export const actions = {
  async fetch_competition_list ({ state, commit }) {
    const url = "competitions/";
    const response = await this.$axios.$get(url);
    commit("set_competition_list", response);
  },
  async fetch_competition ({ state, commit }, id) {
    const url = `competitions/${id}/`;
    const response = await this.$axios.$get(url);
    commit("set_competition", response);
  },
  set_category ({ state, commit }, cat_name) {
    commit("set_category_name", cat_name);
    const chosen_cat = state.competition.categories.find(c => c.category == cat_name);
    commit("set_pools", chosen_cat.pools);
    commit("set_matches", chosen_cat.matches);
    commit("set_bonuses", chosen_cat.bonuses);
  }

};

export const mutations = {
  set_category_name (state, category_name) {
    state.category_name = category_name;
  },
  set_pools (state, pools) {
    state.pools = pools;
  },
  set_matches (state, matches) {
    state.matches = matches;
  },
  set_bonuses (state, bonuses) {
    state.bonuses = bonuses;
  },
  set_competition_list (state, competitions) {
    // Save competitions and augment with router path
    state.competitions = competitions.map(comp => {
      const slug = slugify(comp.name, {
        lower: true
      });
      return {
        ...comp,
        router: `competitions/${comp.id}/${slug}`
      };
    });
  },
  set_competition (state, competition) {
    state.competition = competition;
  },
  show_more (state) {
    state.max_shown += 5;
  }
};
