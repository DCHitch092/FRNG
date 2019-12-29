<template lang="html">
  <v-flex ma-4 pa-4
    d-flex
  >
    <v-card >
      <v-card-title
      ma-2>£0.00</v-card-title>
      <v-card-subtitle>Account Total</v-card-subtitle>
      <v-card-text>This is the amount deposited by you into your account.</v-card-text>
      <v-card-actions><a href="#account">View Account</a></v-card-actions>
    </v-card>

    <v-card
      ma-2
      pa-6
      color="success"
      disabled
    >
      <v-card-title>
      Global Info </v-card-title>
      <v-card-text>This is where a graph expressing some sort of global information of the coin would be displayed.
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
    </v-card-text>
    </v-card >
  </v-flex>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
