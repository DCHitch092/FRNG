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
        <h1 class="mb-2">
          Setting the Stage For Fringe Coin
        </h1>
        <p>On this page you can set up an experiment and try out a model for how fringe coin might work!</p>

        <display-variables :variables="variables" />
      </v-flex>

      <v-expansion-panels
      focusable
      multiple
    >
    <experiment-options :variables="variables" />
    <experiment-shows />
    <experiment-users />
    </v-expansion-panels>

    </v-layout>
  </v-container>
</template>

<script>
import ExperimentOptions from './ExperimentOptions.vue';
import ExperimentShows from './ExperimentShows.vue';
import ExperimentUsers from './ExperimentUsers.vue';
import DisplayVariables from './DisplayVariables.vue';
import { eventBus } from '../main.js'

export default {
  name: 'WelcomePage',

  data(){
    return {
      variables: {
        variable_type: 'variable_set',
        name: 'type a name here',
        coin_buy: 5,
        start_value: 5,
        decay_rate: 0.1,
        access_info_cost: 0.1,
        deposit_cost:0.2,
        advert_cost:0.3,
        advert_plus_cost: 10,
        total_days: 26,
        review_system: false
      },
      experiment:{
        selectedUserTypes:[]
      }
    }
  },

  methods:{
    selectUserTypes: function(userType){
      this.experiment.selectedUserTypes.push(userType)
    },
    deselectUserTypes: function(userType){
      const index = this.experiment.selectedUserTypes.indexOf(userType)
      this.experiment.selectedUserTypes.splice(index, 1)
    }

  },

  mounted() {
  eventBus.$on('add-user-class', (data) => this.selectUserTypes(data))
  eventBus.$on('remove-user-class', (data) => this.deselectUserTypes(data))
  },

  components:{
    'experiment-options': ExperimentOptions,
    'experiment-users': ExperimentUsers,
    'experiment-shows': ExperimentShows,
    'display-variables': DisplayVariables
  }

};
</script>

<style lang="css" scoped>

</style>
