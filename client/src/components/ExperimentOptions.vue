<template lang="html">

  <!-- <v-flex mb-4 pa4> -->

    <v-expansion-panel>
      <v-expansion-panel-header><h2>Variables</h2></v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row justify="space-around">
          <v-col cols="6">

            <v-slider
              v-model="variables.coin_buy"
              hint="The cost in pounds to buy one frng coin"
              label="Coin buy Value"
              step="0.25"
              min="0" max="20"
            ></v-slider>

            <v-slider
              v-model="variables.start_value"
              hint="This is the value, in frng, that a frng coin starts at when it is created"
              label="Coin Start Value"
              min="0" max="20"
              step="0.25"
            ></v-slider>

            <v-slider v-model="variables.deposit_cost"
            hint="This is the small cost to deposit the coin's value into your account and prevent its taking the coin out of circulation."
            label="Deposit Cost"
            min="0" max="4"
            step="0.1">
            </v-slider>

            <v-slider v-model="variables.total_days"
            label="Total Days"
            min="1" max="30"
            hint="how many days will this model run for? (the fringe is around 26 days)"
            step="1"></v-slider>


          </v-col>

          <v-col cols="4">

            <v-slider v-model="variables.decay_rate"
            hint="This is the amount that the coin loses value each day when not passed on."
            label="Decay rate"
            min="0" max="4"
            step="0.1">
            </v-slider>

            <v-slider
              v-model="variables.access_info_cost"
              label="Cost per Data Access"
              min="0" max="4"
              hint="how much, in frng, should it cost for a show to be able to access basic information about one of their audience members who gave them a coin? e.g. an email address, facebook username or twitter handle (freely given for this purpose by the audience member)"
              step="0.1">
            </v-slider>

            <v-slider v-model="variables.advert_cost"
            label="Advert Cost"
            min="0" max="10"
            hint="how much, in frng, should it cost for a small piece of advertising e.g. a newsletter?"
            step="0.5"></v-slider>

            <v-slider v-model="variables.advert_plus_cost"
            label="Mass Advert Cost"
            min="0" max="100"
            hint="how much, in frng, should it cost for a large piece of advertising e.g. across website video?"
            step="1"></v-slider>


          </v-col>

          <v-col cols="2">
            <v-switch v-model="variables.review_system"
            class="ma-2" label="Review System"
            hint="enabling this will influence audiences to see shows based on how good each show is"></v-switch>
          </v-col>


        <v-row justify="space-around">
          <v-col cols="6">
            <v-text-field v-model="variables.name"
            label="Put Name Here"
            solo></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-btn color="randomise" @click="setRandom()">Randomise</v-btn>
            <v-btn color="submit" @click="addVariables">Save For Use In Experiment</v-btn>
            <!-- <v-btn color="error" @click="success = false; error = true;">Error</v-btn> -->
          </v-col>
        </v-row>


      <!-- <v-input
        :messages="['Messages']"
        :success="success"
        :success-messages="successMsg"
        :error="error"
        :error-messages="errorMsg"
        :hide-details="hideDetails"
        :error-count="errorCount"
        :persistent-hint="persistentHint"

        @click:append="appendIconCallback"
        @click:prepend="prependIconCallback"
      >
      </v-input> -->
    </v-row>
  </v-expansion-panel-content>
  </v-expansion-panel>
  <!-- </v-flex> -->
</template>

<script>
import { eventBus } from '../main.js'
import VariableService from '../services/VariableService.js'

export default {
  name: 'experiment-options',

  props: ['variables'],

  data() {
    return{

    }
  },

  methods:{
    addVariables: function() {
			const variable = this.variables
			VariableService.postVariable(variable)
		},

    setRandom: function(){
      this.variables.name = 'random_' + Math.random().toString(16).substring(7),
      this.variables.coin_buy = Math.random() * (21),
      this.variables.start_value = Math.random() * (21),
      this.variables.deposit_cost =  Math.random() * (5),
      this.variables.decay_rate =  Math.random() * (5),
      this.variables.access_info_cost = Math.random() * (5),
      this.variables.advert_cost = Math.random() * (11),
      this.variables.advert_plus_cost = Math.random() * (101),
      this.variables.total_days = Math.random() * (31),
      this.variables.review_system = Math.round(Math.random()) === 0 ? true : false;
    },

  },

  mounted(){
  fetch("http://localhost:3000/api/variables")
    .then(response => response.json())
    .then(json => this.shows = json);
  }
}
</script>

<style lang="css" scoped>
</style>
