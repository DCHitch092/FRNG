<template lang="html">
  <v-flex
  class="d-flex justify-center align-center flex-wrap"
  >
    <div class="flex-columns">
      <h3 class="experiment_option_display">£{{variables.coin_buy}}</h3>
      <v-icon>mdi-coins</v-icon>
    </div>

    <div class="flex-columns">
      <h3 class="experiment_option_display"><v-img alt="frng"
        src="/frng_white.svg" class="mr-1" max-width="0.4em"/>{{variables.start_value}}</h3>
      <v-icon>mdi-ray-start</v-icon>
    </div>

    <div class="flex-columns">
      <h3 class="experiment_option_display"><v-img alt="frng"
        src="/frng_white.svg" class="mr-1" max-width="0.4em"/>{{ variables.deposit_cost }}</h3>
      <v-icon>mdi-bank</v-icon>
    </div>

    <div class="flex-columns">
      <h3 class="experiment_option_display"><v-img alt="frng"
        src="/frng_white.svg" class="mr-1" max-width="0.4em"/>{{variables.decay_rate}}</h3>
        <v-icon >mdi-minus-circle</v-icon>
    </div>

      <div class="flex-columns">
        <h3 class="experiment_option_display"><v-img alt="frng"
          src="/frng_white.svg" class="mr-1" max-width="0.4em"/>{{variables.access_info_cost}}</h3>
        <v-icon >mdi-account-multiple</v-icon>
      </div>

      <div class="flex-columns">
        <h3 class="experiment_option_display"><v-img alt="frng"
          src="/frng_white.svg" class="mr-1" max-width="0.4em"/>{{variables.advert_cost}}</h3>
          <v-icon>mdi-email-newsletter</v-icon>
      </div>
      <div class="flex-columns">
        <h3 class="experiment_option_display"><v-img alt="frng"
          src="/frng_white.svg" class="mr-1" max-width="0.4em"/>{{variables.advert_plus_cost}}</h3>
        <v-icon>mdi-billboard</v-icon>
      </div>

      <div class="flex-columns">

          <h3 class="experiment_option_display d-flex flex-wrap flex-align-center">{{variables.total_days}} <p class="align-top">days</p></h3>
        <v-icon>mdi-calendar</v-icon>
      </div>

  </v-flex>
</template>

<script>
export default {
  name: 'display-variables',

  props: ['variables']
}
</script>

<style lang="css" scoped>

.experiment_option_display{
  min-height: 4em;
  height: 4em;
  margin: 0.5em;
  min-width: 4em;
  width: 4em;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbc02d;
  border-radius: 50%;
  color: white;
}

</style>
