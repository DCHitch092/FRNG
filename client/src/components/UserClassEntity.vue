<template lang="html">
  <v-card :class="[this.status ? 'amber' : '']" @click="status = !status">
    <v-card-title>{{this.info.class_name}}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'user-class-entity',

  data() {
    return {
      status: false
    }
  },

  props:['info'],

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
