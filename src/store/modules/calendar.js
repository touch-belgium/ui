import api from "../../common/api.js";
import { RRule, Day } from "rfc5545-rrule";
import ky from "ky";
import _ from "lodash";
import moment from "moment";

const state = {
  show_date: new Date(),
  events: [], // fill with call to GCalendar API
  selected_event: {
    title: null,
    start: null,
    end: null
  }
};

const getters = {
  expanded_recurrent_events: (state, getters) => (events) => {
    const expanded_events = [];
    for (const ev of events) {
      if (ev.hasOwnProperty('recurrence')) {
        const rfc5545 = RRule.fromString(ev.recurrence[0]);
        const startDate = ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date;
        const endDate = ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date;
        if (rfc5545.frequency === 'weekly') {
          let count;
          if (rfc5545.hasOwnProperty('until')) {
            /* Calculate for how many weeks should the event be
               shown. The MomentJS diff result could be 3.8 weeks,
               or 5.02 weeks so we round that number */
            count = _.round(moment(rfc5545.until).diff(moment(startDate), 'weeks', true));
          } else if (rfc5545.hasOwnProperty('count')) {
            count = rfc5545.count;
          }
          _.times(count, (i) => {
            const next = _.cloneDeep(ev);
            next.start.dateTime = moment(startDate).add(i, 'weeks');
            next.end.dateTime = moment(endDate).add(i, 'weeks');
            expanded_events.push(next);
          });
        }
      } else {
        expanded_events.push(ev);
      }
    }
    return expanded_events;
  },

  streamlined_event: (state, getters) => (ev) => {
    return {
      title: ev.summary,
      startDate: ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date,
      endDate: ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date,
      classes: "clickable_event",
    };
  }
};

const actions = {
  async fetch_events ({ state, commit, getters }) {
    /* Google Apis JS library doesn't work very well with Vue, so
       the request is made in a simpler way */
    const CALENDAR = "touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k@group.calendar.google.com";
    const GOOGLE_API_KEY = "AIzaSyAGfECY7JPalI0pfARPXTmAxiN1uz15Ja8";
    const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR}/events?key=${GOOGLE_API_KEY}`;

    try {
      const response = await ky.get(endpoint).json();
      const processed = getters.expanded_recurrent_events(response.items).map(e => getters.streamlined_event(e));
      commit("set_events", processed);
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  set_show_date (state, date) {
    state.show_date = date;
  },
  set_events (state, events) {
    state.events = events;
  },
  set_selected_event (state, mouse_event) {
    state.selected_event.title = mouse_event.title;
    state.selected_event.start = moment(mouse_event.startDate).format("LT");
    state.selected_event.end = moment(mouse_event.endDate).format("LT");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
