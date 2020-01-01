import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

export const eventBus = new Vue();
Vue.config.productionTip = false

Vue.use(VueRouter)

import WelcomePage from './components/WelcomePage';
import Account from './components/AccountView';
import Shows from './components/Shows';
import AddShow from './components/AddShow';
import ViewShows from './components/ViewShows';


const VariablesSetUp = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage
  },
  {
    path: '/shows',
    name: '',
    component: Shows,
    children: [
      { path: '/add',
        name: 'add-show',
        component: AddShow
      },
      { path: '/view',
        name: 'view-shows',
        component: ViewShows
      }
    ]},
  {
    path: '/account',
    name: 'account',
    component: Account
  }]

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
