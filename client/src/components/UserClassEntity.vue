<template lang="html">
  <v-card :class="[this.status ? 'amber' : '']" @click="changeStatus">
    <v-card-title>{{this.info.class_name}}</v-card-title>
  </v-card>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'user-class-entity',

  data() {
    return {
      status: true
    }
  },

  props:['info'],

  methods:{
    changeStatus: function() {
      this.status = !this.status
      if (this.status) {
        eventBus.$emit('add-user-class', this.info)
      } else if (!this.status){
        eventBus.$emit('remove-user-class', this.info)
      }

    }
  },

  computed: {
    selectedClass: function(){
      return {
        'selected': this.status,
        'unselected': !this.status
      }
    }
  }

}
</script>

<style lang="css" scoped>
.selected{

}
.unselected{

}
</style>
