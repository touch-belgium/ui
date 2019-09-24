import api from "../../common/api.js";
import slugify from "slugify";

const state = {
  search_competition_box: "",
  select_team_box: "",
  competitions: [],
  matches: [],
  max_shown: 10,
  competition: null,
  table_fields: {
    team: {
      label: "Team",
      sortable: true
    },
    points: {
      key: "points",
      label: "Points",
      sortable: true
    },
    bonus: {
      label: "Bonus",
      sortable: true
    },
    played: {
      label: "Played",
      sortable: true
    },
    wins: {
      label: "Wins",
      sortable: true
    },
    loses: {
      label: "Loses",
      sortable: true
    },
    ties: {
      label: "Ties",
      sortable: true
    },
    tf: {
      label: "TF",
      sortable: true
    },
    ta: {
      label: "TA",
      sortable: true
    },
    td: {
      label: "TD",
      sortable: true
    }
  }
};

const getters = {
  competitions (state, getters) {
    return state.competitions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },
  filtered_competitions (state, getters) {
    const patt = new RegExp(state.search_competition_box, "i");
    return getters.competitions.filter(c => patt.test(c.name));
  },
  paginated_competitions (state, getters) {
    return getters.filtered_competitions.slice(0, state.max_shown);
  },
  n_total_shown (state, getters) {
    return getters.paginated_competitions.length;
  },
  teams (state, getters) {
    let s = new Set();
    for (let match of state.matches) {
      s.add(match.home_team.name);
      s.add(match.away_team.name);
    }
    return [...s];
  },
  home_matches: (state, getters) => team_name => state.matches.filter(m => m.home_team.name == team_name),
  away_matches: (state, getters) => team_name => state.matches.filter(m => m.away_team.name == team_name),
  relevant_matches: (state, getters) => team_name => state.matches.filter(m => m.home_team.name == team_name || m.away_team.name == team_name),
  home_wins: (state, getters) => (acc, cur, idx, src) => cur.home_touchdowns > cur.away_touchdowns ? acc + 1 : acc,
  away_wins: (state, getters) => (acc, cur, idx, src) => cur.away_touchdowns > cur.home_touchdowns ? acc + 1 : acc,
  home_bonus: (state, getters) => (acc, cur, idx, src) => acc + cur.home_bonus,
  away_bonus: (state, getters) => (acc, cur, idx, src) => acc + cur.away_bonus,
  ties: (state, getters) => (acc, cur, idx, src) => cur.home_touchdowns == cur.away_touchdowns ? acc + 1 : acc,
  home_td: (state, getters) => (acc, cur, idx, src) => acc + cur.home_touchdowns,
  away_td: (state, getters) => (acc, cur, idx, src) => acc + cur.away_touchdowns,
  team_name_to_row: (state, getters) => name => {
    let wins = getters.home_matches(name).reduce(getters.home_wins, 0)
        + getters.away_matches(name).reduce(getters.away_wins, 0);
    let loses = getters.home_matches(name).reduce(getters.away_wins, 0)
        + getters.away_matches(name).reduce(getters.home_wins, 0);
    let ties = getters.relevant_matches(name).reduce(getters.ties, 0);
    let played = wins + loses + ties;
    let bonus = getters.home_matches(name).reduce(getters.home_bonus, 0)
        + getters.away_matches(name).reduce(getters.away_bonus, 0);
    let tf = getters.home_matches(name).reduce(getters.home_td, 0)
        + getters.away_matches(name).reduce(getters.away_td, 0);
    let ta = getters.home_matches(name).reduce(getters.away_td, 0)
        + getters.away_matches(name).reduce(getters.home_td, 0);
    return {team: name,
            points: wins * state.competition.win_value + ties * state.competition.tie_value + loses * state.competition.defeat_value + bonus,
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
  filtered_matches: (state, getters) => team => {
    return team == null ? state.matches :
      state.matches.filter(m => m.home_team.name == team ||
                           m.away_team.name == team);
  }
};

const actions = {
  async fetch_competition_list ({ state, commit }) {
    const url = "competitions";
    const response = await api.get(url).json();
    commit("set_competition_list", response);
  },
  async fetch_competition ({ state, commit }, id) {
    const url = `competitions/${id}`;
    const response = await api.get(url).json();
    commit("set_competition", response);
  },
  async fetch_matches ({ state, commit }, id) {
    const url = `matches/c/${id}`;
    const response = await api.get(url).json();
    commit("set_matches", response.results);
  }
};

const mutations = {
  set_competition_list (state, competitions) {
    state.competitions = competitions.map(comp => {return {...comp, router: `competitions/${slugify(comp.name)},${comp.id}`};});
  },
  set_competition (state, competition) {
    state.competition = competition;
  },
  set_matches (state, matches) {
    state.matches = matches;
  },
  update_search_competition_box (state, search) {
    state.search_competition_box = search;
  },
  update_select_team_box (state, selected) {
    state.select_team_box = selected;
  },
  show_more (state) {
    state.max_shown += 5;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
