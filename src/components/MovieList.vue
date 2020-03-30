<template>
  <div class="wrapper">
      <Filters
        @selected="onSelected"></Filters>
      <v-simple-table
      :dense="true">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">number</th>
          <th class="text-left">title</th>
          <th class="text-left">type</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(movie, index) in movies" :key="index">
          <td>
            {{index + 1}}
          </td>
          <td>
            <MovieListItem
              :key="movie.imdbID"
              :movie="movie">
            </MovieListItem>
          </td>
          <td>
            {{movie.Type}}
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <Button
      ref="loadMore"
      :isShowLoadMore="isShowLoadMore"
      :isLoading="isLoading"
      @click="loadMore"></Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Filters from '@/components/Filters.vue';
import Button from '@/components/Button.vue';
import MovieListItem from './MovieListItem.vue';

export default Vue.extend({
  name: 'MovieList',
  data() {
    return {
      search: 'Batman',
      page: 1,
      type: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapState({
      movies: (state) => state.movies,
      isShowLoadMore: (state) => state.isShowLoadMore,
    }),
  },
  async created() {
    if (!this.movies.length) {
      await this.loadMovies();
    }
  },
  methods: {
    async loadMovies() {
      this.isLoading = true;
      await this.$store.dispatch('getMovieList', {
        s: this.search,
        page: this.page,
        type: this.type,
      });
      this.isLoading = false;
    },
    async loadMore() {
      this.page += 1;
      await this.loadMovies();
      this.$refs.loadMore.$el.scrollIntoView();
    },
    onSelected(type) {
      this.page = 1;
      this.type = (type === 'all types') ? '' : type;
      this.$store.commit('clearMovies');
      this.loadMovies();
    },
  },
  components: {
    MovieListItem,
    Filters,
    Button,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 700px;
    margin: auto;

    @media screen and (max-width: 700px) {
      width: auto;
    }

    td {
      text-align: left;
    }
  }

  .button-primary {
    margin: 20px auto;
  }
</style>
