<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="amber"
      dark
    >

      <div class="d-flex align-center">
        <v-img
          alt="FRNG Logo"
          class="shrink mr-2"
          contain
          src="/FRNG_logo.svg"
          transition="scale-transition"
          width="120"
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
      <WelcomePage/>
    </v-content>
  </v-app>
</template>

<script>
import WelcomePage from './components/WelcomePage';

export default {
  name: 'App',

  components: {
    WelcomePage,
  },

  data: () => ({
    //
  }),
};
</script>
