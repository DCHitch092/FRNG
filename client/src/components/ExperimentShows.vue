<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header
    class="mb-2"
    color="amber darken-1">Shows</v-expansion-panel-header>
    <v-expansion-panel-content>
  <v-data-iterator
  :items="shows"
  >

  <template v-slot:default="props">
    <v-row>
      <v-col
        v-for="show in shows"
        :key="show.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card>
          <v-card-title class="subheading font-weight-bold">{{ show.title }}</v-card-title>

          <v-divider></v-divider>

          <v-list dense>
            <!-- <v-list-item>
              <v-list-item-content>Title:</v-list-item-content>
              <v-list-item-content class="align-end">{{ show.title }}</v-list-item-content>
            </v-list-item> -->

            <v-list-item>
              <v-list-item-content>Coins:</v-list-item-content>
              <v-list-item-content class="align-end">{{ show.coins.length }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Contributors:</v-list-item-content>
              <v-list-item-content class="align-end">{{ show.contributors.length }}</v-list-item-content>
            </v-list-item>

          </v-list>
          <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
        </v-card>
      </v-col>
    </v-row>
  </template>
  </v-data-iterator>
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>
export default {
  name: 'experiment-shows',
  data(){
    return{
    shows:[]}
  },

  mounted(){
  fetch("http://localhost:3000/api/shows")
    .then(response => response.json())
    .then(json => this.shows = json);
  }
}
</script>

<style lang="css" scoped>

</style>
