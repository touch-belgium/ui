// https://github.com/richardtallent/vue-simple-calendar/issues/132

import Vue from "vue";
import { CalendarView } from "vue-simple-calendar";

const VueSimpleCalendar = {
  install (Vue, options) {
    Vue.component("calendar-view", CalendarView);
  }
};

Vue.use(VueSimpleCalendar, { name: "calendar-view" });

export default VueSimpleCalendar;
