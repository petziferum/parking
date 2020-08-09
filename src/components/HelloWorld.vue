<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
          <v-btn @click="createNewLot">Create</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="space in getParkingSpaces" :key="space.id">
        <v-card><v-card-title>{{space.name}}</v-card-title>
        <v-card-subtitle>{{space.id}}</v-card-subtitle>
        <v-card-subtitle>{{space.guide}}</v-card-subtitle>
        <v-card-subtitle>{{space.spaces}}</v-card-subtitle></v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({

  }),
  methods: {
    createNewLot() {
      this.$store.dispatch("saveNewParkingLot")
    }
  },
  computed: {
    getParkingSpaces() {
      return this.$store.getters.getParkingSpaces;
    }
  }
};
</script>
