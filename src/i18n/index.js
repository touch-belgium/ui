import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    home: {
      News: "Latest news",
      Calendar: "Calendar"
    },
    news: {
      News: "News"
    }
  },
  fr: {
    home: {
      News: "Dernières nouvelles",
      Calendar: "Calendrier"
    },
    news: {
      News: "Nouvelles"
    }
  },
  nl: {
    home: {
      News: "Laatste artikelen",
      Calendar: "Kalender"
    },
    news: {
      News: "Nieuws"
    }
  }
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});
