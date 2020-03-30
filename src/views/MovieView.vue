<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="wrapper wrapper_details">
    <h1>{{movieDetail.Title}}</h1>
    <img
      v-if="isShowPoster"
      :src="`${movieDetail.Poster}`"
      alt="Poster"
      class="poster">
    <v-simple-table
      :dense="true">
      <template
        v-slot:default>
        <tbody>
        <tr v-for="(value, key) in movieDetail" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
      class="button-primary"
      color="primary"
      @click="goHome">
      <v-icon left>mdi-reply</v-icon>
      <span>Return</span>
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
      movieDetail: (state) => state.movieDetail,
    }),
    isShowPoster() {
      return this.movieDetail.Poster !== 'N/A';
    },
  },
  destroyed() {
    this.$store.commit('setMovieDetail', []);
  },
  async created() {
    const { movieId } = this.$route.params;
    await this.$store.dispatch('getSpecificMovie', movieId);
    window.scrollTo(0, 0);
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .wrapper_details {
    width: 1200px;
    text-align: center;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }

  .poster {
    margin: 15px auto;
  }
</style>
