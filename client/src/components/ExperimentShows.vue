<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header

    color="amber darken-1"><h2>Shows</h2></v-expansion-panel-header>
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
          <v-card-title class=""><h3>{{ show.title }}</h3></v-card-title>

          <v-divider></v-divider>

          <v-list dense>
            <!-- <v-list-item>
              <v-list-item-content>Title:</v-list-item-content>
              <v-list-item-content class="align-end">{{ show.title }}</v-list-item-content>
            </v-list-item> -->

            <v-list-item>
              <v-list-item-content><p>Coins:</p></v-list-item-content>
              <v-list-item-content class="align-end"><p>{{ show.coins.length }}</p></v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content><p>Contributors:</p></v-list-item-content>
              <v-list-item-content class="align-end"><p>{{ show.contributors.length }}</p></v-list-item-content>
            </v-list-item>

          </v-list>
          <v-fade-transition>
          <!-- <v-overlay

            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay> -->
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
