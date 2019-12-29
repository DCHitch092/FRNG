<template lang="html">

  <!-- <v-flex mb-4 pa4> -->

    <v-expansion-panel>
      <v-expansion-panel-header>Variables</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row justify="space-around">
          <v-col cols="6">

            <v-slider
              v-model="variables.coin_buy"
              hint="The cost per coin to buy it"
              label="Coin buy Value"
              step="0.25"
              min="0" max="20"
            ></v-slider>

            <v-slider
              v-model="variables.start_value"
              hint="This is the value that a coin starts at when it is created"
              label="Coin Start Value"
              min="0" max="20"
            ></v-slider>

            <v-slider v-model="variables.deposit_cost" hint="This is the small cost to deposit the coin's value into your account and prevent its taking the coin out of circulation."
            label="Deposit Cost"
            min="0" max="4">
            </v-slider>

            <v-slider
              v-model="variables.access_info_cost"
              label="Cost per Data Access"
              min="0" max="4">
            </v-slider>
          </v-col>

          <v-col cols="4">
            <v-slider v-model="variables.advert_cost" label="Advert Cost" min="0" max="1"></v-slider>
            <v-slider v-model="variables.advert_plus_cost" label="Mass Advert Cost" min="0" max="100"></v-slider>
            <v-slider v-model="variables.total_days" label="Total Days" min="0" max="30"></v-slider>
          </v-col>

          <v-col cols="2">
            <v-switch v-model="variables.review_system" class="ma-2" label="Review System" hint="enabling this will influence audiences to see shows based on how good each show is"></v-switch>
          </v-col>

      <v-col cols="12">
        <v-row justify="space-around">
          <v-btn color="submit" @click="success = true; error = false;">Success</v-btn>
          <v-btn color="error" @click="success = false; error = true;">Error</v-btn>
        </v-row>

      </v-col>
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

export default {
  name: 'experiment-options',

  props: ['variables'],

  data() {
    return{
    }
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
