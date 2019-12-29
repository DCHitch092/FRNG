import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

export const eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  vuetify,
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  render: h => h(App)
}).$mount('#app')
