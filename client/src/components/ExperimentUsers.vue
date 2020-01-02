<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header
    color="amber darken-1">
      <h2>Users</h2>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-slider
      v-model="numberOfUsers"
      min=0
      step=1
      :max="maxUserNumbers"
      label="Number of Users"
      hint="This is the number of users this experiment will use to project how frng coin might be used"
      ></v-slider>
        <v-flex class="d-flex flex-row mb-6"><user-class-entity v-for="info of userClasses" :info="info" /></v-flex>
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>
import UserClassEntity from './UserClassEntity.vue';

export default {
  name: 'experiment-users',

  components:{
  'user-class-entity': UserClassEntity,
  },

  data(){
    return{
      maxUserNumbers: 10,
      numberOfUsers: 1,
      userClasses:[]
    }
  },

  mounted(){
  fetch("http://localhost:3000/api/user_classes")
    .then(response => response.json())
    .then(json => this.userClasses = json);
  }
}
</script>

<style lang="css" scoped>

</style>
