<template lang="html">
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-form>
        <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="Show Name"
          ></v-text-field>

          <v-text-field
              v-model="model"
              :counter="max"
              :rules="rules"
              label="Act Name"
          ></v-text-field>

          <v-combobox
          v-model="model"></v-combobox>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
