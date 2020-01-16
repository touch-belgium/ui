// https://github.com/richardtallent/vue-simple-calendar/issues/132

import Vue from "vue";
import { CalendarViewHeader } from "vue-simple-calendar";

const VueSimpleCalendarHeader = {
  install (Vue, options) {
    Vue.component("calendar-view-header", CalendarViewHeader);
  }
};

Vue.use(VueSimpleCalendarHeader, { name: "calendar-view-header" });

export default VueSimpleCalendarHeader;
