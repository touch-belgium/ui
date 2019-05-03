import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  EN: {
    message: {
      hello: 'hello world'
    }
  },
  FR: {
    message: {
      hello: 'texte en français'
    }
  }
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'EN', // set locale
  messages, // set locale messages
});
