<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="page-layout">
    <h1>{{MovieDetail.Title}}</h1>
    <img :src="`${MovieDetail.Poster}`" alt="Poster">
    <div class="wrapper">
      <v-simple-table
        dense
        class="list-details">
        <template>
          <tbody>
          <tr v-for="(value, key) in MovieDetail" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <v-btn
      class="button-primary"
      color="primary"
      @click="goHome">Go to HOME page
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MovieView',
  computed: {
    ...mapState({
      MovieDetail: (state) => state.MovieDetail,
    }),
  },
  created() {
    const { movieId } = this.$route.params;
    this.$store.dispatch('getSpecificMovie', movieId);
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list-details{
    width: 80%;
  }
</style>
