<template>
  <div
    @click="toDetails">
    {{ movie.Title }}
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
    } as PropOptions<Movie>,
  },
  computed: {
    routerTo() {
      return `/movies/${this.movie.imdbID}`;
    },
  },
  methods: {
    toDetails() {
      this.$router.push({
        path: this.routerTo,
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
