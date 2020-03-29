<template>
  <div>
    <v-select
      id="filter"
      :items="items"
      v-model="value"
      label="Select type"
      class="filters"
      @input="input"
    ></v-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Filters',
  data() {
    return {
      items: ['movie', 'series', 'game', 'all types'],
      value: '',
    };
  },
  methods: {
    input() {
      this.$emit('selected', this.value);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .filters {
    width: 30%;
    margin: auto;
  }

</style>
