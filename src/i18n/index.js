import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    home: {
      News: "News",
      Calendar: "Calendar"
    }
  },
  fr: {
    home: {
      News: "Nouvelles",
      Calendar: "Calendrier"
    }
  },
  nl: {
    home: {
      News: "Laatste artikelen",
      Calendar: "Kalender"
    }
  }
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});
