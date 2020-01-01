<template lang="html">
<v-layout>

  {{ this.show ? this.show : 'sorry, there is no show to er... show'}}
</v-layout>
</template>

<script>
export default {
  name: 'view-show',

  data() {
    return {
      show: null
    }
  },

  mounted() {
  fetch(`http://localhost:3000/api/shows/${this.$route.params.id}`)
    .then(response => response.json())
    .then(json => this.show = json)
    ;
    // .catch(this.$router.push('home'));
  }
}
</script>

<style lang="css" scoped>
</style>
