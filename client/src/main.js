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
import AllShows from './components/AllShows';
import ViewShow from './components/ViewShows';
import colors from 'vuetify/es5/util/colors';


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
      { path: '/',
        name: 'all-shows',
        component: AllShows
      },
      { path: 'add',
        name: 'add-show',
        component: AddShow
      },
      { path: '/view',
        name: 'view-show',
        component: ViewShow
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
      // light: {
      //   primary: colors.amber.base,
      //   secondary: colors.orange.base,
      //   accent: colors.light-blue.base,
      //   error: colors.deep-orange.base,
      //   warning: colors.blue-grey.base,
      //   info: colors.lime.base,
      //   success: colors.light-green.base
      // },
    },
  },
  router,
  render: h => h(App)
}).$mount('#app')
