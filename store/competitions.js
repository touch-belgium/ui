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
      sortable: true
    },
    {
      key: "points",
      label: "Points",
      sortable: true
    },
    {
      key: "bonus",
      label: "Bonus",
      sortable: true
    },
    {
      key: "played",
      label: "Played",
      sortable: true
    },
    {
      key: "wins",
      label: "Wins",
      sortable: true
    },
    {
      key: "loses",
      label: "Loses",
      sortable: true
    },
    {
      key: "ties",
      label: "Ties",
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


  teams (state, getters) {
    const s = new Set();
    for (const match of state.matches) {
      s.add(match.home_team.name);
      s.add(match.away_team.name);
    }
    return [...s];
  },
  home_matches: (state, getters) => (team_name) => state.matches.filter(m => m.home_team.name == team_name),
  away_matches: (state, getters) => (team_name) => state.matches.filter(m => m.away_team.name == team_name),
  relevant_matches: (state, getters) => (team_name) => state.matches.filter(m => m.home_team.name == team_name || m.away_team.name == team_name),
  home_wins: (state, getters) => (acc, cur, idx, src) => cur.home_touchdowns > cur.away_touchdowns ? acc + 1 : acc,
  away_wins: (state, getters) => (acc, cur, idx, src) => cur.away_touchdowns > cur.home_touchdowns ? acc + 1 : acc,
  ties: (state, getters) => (acc, cur, idx, src) => cur.home_touchdowns == cur.away_touchdowns ? acc + 1 : acc,
  with_bonus: (state, getters) => (team_name) => state.bonuses.find(b => b.team == team_name),
  home_td: (state, getters) => (acc, cur, idx, src) => acc + cur.home_touchdowns,
  away_td: (state, getters) => (acc, cur, idx, src) => acc + cur.away_touchdowns,
  team_name_to_row: (state, getters) => name => {
    const wins = getters.home_matches(name).reduce(getters.home_wins, 0)
          + getters.away_matches(name).reduce(getters.away_wins, 0);
    const loses = getters.home_matches(name).reduce(getters.away_wins, 0)
          + getters.away_matches(name).reduce(getters.home_wins, 0);
    const ties = getters.relevant_matches(name).reduce(getters.ties, 0);
    const played = wins + loses + ties;
    const bonus = getters.with_bonus(name) ? getters.with_bonus(name).points : 0;
    const tf = getters.home_matches(name).reduce(getters.home_td, 0)
          + getters.away_matches(name).reduce(getters.away_td, 0);
    const ta = getters.home_matches(name).reduce(getters.away_td, 0)
          + getters.away_matches(name).reduce(getters.home_td, 0);
    return {
      team: name,
      points: wins * state.competition.win_value +
        ties * state.competition.tie_value +
        loses * state.competition.defeat_value,
      bonus,
      played,
      wins,
      loses,
      ties,
      tf,
      ta,
      td: tf - ta
    };
  },
  table_info (state, getters) {
    return getters.teams.map(t => getters.team_name_to_row(t));
  },
  filtered_matches: (state, getters) => (matches, team) => {
    return team == null ? matches : getters.relevant_matches(matches, team.name);
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
      return {
        ...comp,
        router: `competitions/${comp.id}/${slugify(comp.name)}`
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
