<template lang="html">
  <v-container>
    <h1 class="mb-2">
      Shows
    </h1>
    <v-layout
      text-center
      wrap
    >

      <router-view />
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'shows-route',

  data(){
    return{
    shows:[]}
  }
  // ,
  //
  // mounted(){
  // fetch("http://localhost:3000/api/shows")
  //   .then(response => response.json())
  //   .then(json => this.shows = json);
  // }
}
</script>

<style lang="css" scoped>
</style>
