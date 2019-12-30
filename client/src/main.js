import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

export const eventBus = new Vue();
Vue.config.productionTip = false

Vue.use(VueRouter)

import WelcomePage from './components/WelcomePage';
import AddShow from './components/AddShow';

const VariablesSetUp = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  {      path: '/',      name: 'home',      component: WelcomePage    },
  {      path: '/add-show',      name: 'add-show',      component: AddShow    },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


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
  router,
  render: h => h(App)
}).$mount('#app')
