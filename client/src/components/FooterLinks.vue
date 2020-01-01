<template lang="html">
    <v-footer
      class="mt-2"
      color="amber darken-3"
      app
      absolute
    >
    <v-flex
      mb-4
      class="d-flex flex-rows flex-start mt-2"
    >

      <v-layout class="d-flex flex-column align-center">
        <h4 class="font-weight-bold mb-3">What's next?</h4>
        <a
          v-for="(next, i) in whatsNext"
          :key="i"
          :href="next.href"
          class="subheading mx-3"
          target="_blank"
        >{{ next.text }}</a>
      </v-layout>

      <v-layout class="d-flex flex-column align-center">
        <h4 class="font-weight-bold mb-3">Shows</h4>
          <a
            v-for="(link, i) in showLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
      </v-layout>

      <v-layout class="d-flex flex-column align-center">
        <h4 class="font-weight-bold mb-3">FRNG Model Tools</h4>
          <a
            v-for="(model, i) in modelSetUp"
            :key="i"
            :href="model.href"
            class="subheading mx-3"
            target="_blank"
          >{{ model.text }}</a>
        </v-layout>
      </v-flex>
    </v-footer>
</template>

<script>
export default {
  name: 'footer-links',

  data: () => ({
    modelSetUp: [
      {
        text: 'Explainer',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'Define Variables',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'Run a Model',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    showLinks: [
      {
        text: 'View All Shows',
        href: '/shows/view',
      },
      {
        text: 'Add New Show',
        href: '/shows/add',
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  })
}
</script>

<style lang="css" scoped>
</style>
