<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="amber"
      dark
      src="/frng-bar-bg.png"
    >
    <template v-slot:img="{ props }">
        <router-link to="/"><v-img
          v-bind="props"
          gradient="to top right, rgba(255, 191, 0, 0.4), rgba(255, 191, 0, 0.8)"
        ></v-img></router-link>
      </template>
      <div class="d-flex align-center">
        <v-img
          alt="FRNG Logo"
          class="shrink mr-2 ml-2"
          contain
          src="/fring_coin_logo_FR_NG.svg"
          transition="scale-transition"
          width="220"
          min-width="100"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <!-- <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link> -->
      <v-btn
      text
      color="reply orange"
      >
      <span class="mr-2"><router-link to="/">Home</router-link></span>
      </v-btn>

      <v-btn

      text
      color="reply orange"
      >
      <span class="mr-2">
      <router-link to="/add-show">add Show</router-link></span>
      </v-btn>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>

      <router-view />
      <!-- <WelcomePage /> -->
    </v-content>
    <footer-links />
  </v-app>
</template>

<script>
import WelcomePage from './components/WelcomePage';
import FooterLinks from './components/FooterLinks';

export default {
  name: 'App',

  components: {
    WelcomePage,
    'footer-links': FooterLinks
  },

  data: () => ({
    // users: [],
    // coins: [],
    // variables: [],
    // experiments: []
    //
  })


};
</script>
<style>


</style>
