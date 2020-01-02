<template lang="html">
<v-layout>
  <v-row justify="space-around">
    <v-col cols="12">
      <!-- {{ !this.show ? 'sorry, there is no show to er... show' : }} -->
      <h1>  {{ this.show.title }} <router-link to:>(edit)</router-link></h1>
    </v-col>
    <v-col cols=4>
      <h2> {{ this.show.act }} </h2>
    </v-col>
      <p> {{ this.show.startTime }}</p>
      <p> {{ this.show.duration }}</p>
      <p> {{ this.show.genre }}</p>
      <!-- <a href={ this.show.links.facebook } ><v-img> {{ this.show.links.facebook }}</v-img></a> -->
    </v-col>
  </v-row>
</v-layout>
</template>

<script>
export default {
  name: 'view-show',

  data() {
    return {
      show: ''
    }
  },

  mounted() {
  fetch(`http://localhost:3000/api/shows/${this.$route.params.id}`)
    .then(response => response.json())
    .then(json => this.show = json)
    ;
    // .catch(this.$router.push('home'));
  }
}
</script>

<style lang="css" scoped>
</style>
