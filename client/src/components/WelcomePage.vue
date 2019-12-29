<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <!-- <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex> -->
      <v-flex mb-4 pa-4>
        <h1 class="display-2 font-weight-bold mb-2">
          Setting the Stage For Fringe Coin
        </h1>
        <p>On this page you can set up an experiment and try out a model for how fringe coin might work!</p>

        <v-flex
        class="d-flex justify-center align-center flex-wrap"
        >
          <h3 class="experiment_option_display"><v-icon x-small color="white">mdi-CurrencyUsd</v-icon>£{{variables.coin_buy}}</h3>
          <h3 class="experiment_option_display">£{{variables.start_value}}</h3>
          <h3 class="experiment_option_display">{{ variables.deposit_cost }}</h3>


        <h3 class="experiment_option_display">£{{variables.decay_rate}}</h3>
            <h3 class="experiment_option_display">£{{variables.access_info_cost}}</h3>
            <h3 class="experiment_option_display">£{{variables.advert_cost}}</h3>
            <h3 class="experiment_option_display">£{{variables.advert_plus_cost}}</h3>
            <h3 class="experiment_option_display">{{variables.total_days}}</h3>

        </v-flex>
      </v-flex>

      <v-expansion-panels
      v-model="panel"
      focusable
      multiple
    >
    <experiment-options :variables="variables" />
    <experiment-shows />
    </v-expansion-panels>

    </v-layout>
  </v-container>
</template>

<script>
import ExperimentOptions from './ExperimentOptions.vue';
import ExperimentShows from './ExperimentShows.vue';
import { eventBus } from '../main.js'

export default {
  name: 'WelcomePage',

  props: ['shows'],

  data(){
    return {
      variables: {
    name: 'default',
    coin_buy: 5,
    start_value: 5,
    decay_rate: 0.1,
    access_info_cost: 0.1,
    deposit_cost:0.2,
    advert_cost:0.3,
    advert_plus_cost: 10,
    total_days: 26,
    review_system: false
      }
    }
  },

  components:{
    'experiment-options': ExperimentOptions,
    'experiment-shows': ExperimentShows
  },

  computed(){
    return{

    }
  }


};
</script>

<style lang="css" scoped>
.experiment_option_display{
  min-height: 4em;
  height: 4em;
  margin: 0.5em;
  min-width: 4em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  background-color: #fbc02d;
  border-radius: 50%;
  color: white;
}
</style>
