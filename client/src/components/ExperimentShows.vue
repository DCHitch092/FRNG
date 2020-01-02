<template lang="html">
  <v-expansion-panel :shows="shows">
    <v-expansion-panel-header
    color="amber darken-1">
      <h2>Shows</h2>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-slider
      v-model="numberOfShows"
      min=0
      step=1
      :max="possibleAmountOfShows"
      label="Number of Shows"
      hint="This is the number of shows this experiment will use to project how frng coin might be used"
      ></v-slider>

      <span class="align-left"><v-icon v-for="items of numberOfShows">mdi-rectangle</v-icon>
      {{ numberOfShows }} show(s) or {{ percentageShowsUsed}}%
    </span>
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>
export default {
  name: 'experiment-shows',

  data(){
    return{
    numberOfShows: 1,
    shows:[]
    }
  },

  computed: {
    possibleAmountOfShows: function() {
      return this.shows.length
    },
    percentageShowsUsed: function(){
      return Math.round(this.numberOfShows/this.possibleAmountOfShows*100)
    }

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
