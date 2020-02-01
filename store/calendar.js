import { RRule, RRuleSet, rrulestr } from "rrule";
import _ from "lodash";
import moment from "moment";

export const state = () => ({
  raw_google_events: [], // filled with call to GCalendar API
  show_date: new Date(),
  show_events: [],
  selected_event: null
});

export const getters = {
  expanded_recurrent_events (state, getters) {
    const expanded_events = [];
    for (const ev of state.raw_google_events) {
      if (ev.hasOwnProperty('recurrence')) {
        // If event is recurrent, push several copies of it.
        if (ev.start.hasOwnProperty("dateTime") && ev.end.hasOwnProperty("dateTime")) {
          const rule = rrulestr(_.join(ev.recurrence, "\n"));
          rule.options.dtstart = new Date(ev.start.dateTime);
          const from_date = new Date(moment(state.show_date).subtract(1, "week"));
          const to_date = new Date(moment(state.show_date).add(1, "month"));
          const near_future_dates = rule.between(from_date, to_date);
          const start_date = moment(ev.start.dateTime);
          const end_date = moment(ev.end.dateTime);
          for (const future_date of near_future_dates) {
            const future_start_date = moment(future_date).hour(start_date.hour()).minute(start_date.minute());
            const future_end_date = moment(future_date).hour(end_date.hour()).minute(end_date.minute());
            expanded_events.push({
              ...ev,
              all_day: false,
              recurrent: true,
              start: {
                dateTime: future_start_date
              },
              end: {
                dateTime: future_end_date
              }
            });
          }
        } else {
          // TODO: rare case, recurrent event with no dateTime, just
          // dates. No need for this until I see a specific case
        }
      } else {
        // If it is not a recurrent event, push it, but check for
        // all-day events. These events have a end.date of a day
        // later.
        if (ev.start.hasOwnProperty("dateTime") && ev.end.hasOwnProperty("dateTime")) {
          expanded_events.push({
            ...ev,
            all_day: false,
            recurrent: false,
            start: {
              dateTime: moment(ev.start.dateTime)
            },
            end: {
              dateTime: moment(ev.end.dateTime)
            }
          });
        } else {
          // Google considers all-day events to finish the next day,
          // so subtract one day.
          expanded_events.push({
            ...ev,
            all_day: true,
            recurrent: false,
            start: {
              date: moment(ev.start.date)
            },
            end: {
              date: moment(ev.end.date).subtract(1, "day")
            }
          });
        }
      }
    }
    return expanded_events;
  },

  streamlined_event: (state, getters) => (ev) => {
    return {
      title: ev.summary,
      startDate: ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date,
      endDate: ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date,
      description: ev.description,
      location: ev.location,
      classes: "clickable_event",
      all_day: ev.all_day,
      recurrent: ev.recurrent,
      id: ev.id
    };
  },

  formatted_datetime: (state, getters) => (ev) => {
    if (ev.all_day) {
      if (ev.startDate.dayOfYear() == ev.endDate.dayOfYear()) {
        return ` ${ev.startDate.format("MMMM Do")}`;
      } else {
        return ` ${ev.startDate.format("MMMM Do")} - ${ev.endDate.format("MMMM Do")}`;
      }
    } else if (ev.recurrent) {

      return ` ${ev.startDate.format("HH:mm")} - ${ev.endDate.format("HH:mm")}`;
    } else {
      return ` ${ev.startDate.format("MMMM Do, HH:mm")} - ${ev.endDate.format("MMMM Do, HH:mm")}`;
    }
  }
};

export const actions = {
  async fetch_events ({ state, commit, getters }) {
    /* Google Apis JS library/SDK difficult to set up with Vue
     * (2019). Sending vanilla request */
    const CALENDAR = "touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k@group.calendar.google.com";
    const GOOGLE_API_KEY = "AIzaSyAGfECY7JPalI0pfARPXTmAxiN1uz15Ja8";
    const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR}/events`;
    let response = {};
    let items = [];
    let pageToken = "";
    do {
      response = await this.$axios.$get(endpoint, {
        params: {
          key: "AIzaSyAGfECY7JPalI0pfARPXTmAxiN1uz15Ja8",
          pageToken: pageToken
        }
      });
      pageToken = response.nextPageToken;
      items = items.concat(response.items);
    } while ("nextPageToken" in response);
    commit("set_raw_google_events", items);
  },

  change_period ({ state, commit, getters }, date) {
    // TODO: doc needed
    commit("set_show_date", date);
    const processed = getters.expanded_recurrent_events.map(e => getters.streamlined_event(e));
    commit("set_show_events", processed);
  }
};

export const mutations = {
  set_show_date (state, date) {
    state.show_date = date;
  },
  set_raw_google_events (state, events) {
    state.raw_google_events = events;
  },
  set_show_events (state, events) {
    state.show_events = events;
  },
  set_selected_event (state, mouse_event) {
    // vue-simple-calendar gives, through the mouse event, the
    // event-id, with which we can find the event in our store and
    // display more info in the modal.

    // TODO: convert into a hash map to avoid searching
    state.selected_event = state.show_events.find(e => e.id == mouse_event.id);
  }
};
