<template>
  <v-btn
    v-show="isShowLoadMore"
    class="button-primary"
    color="primary"
    :loading="isLoading"
    @click="onClick">
    <span>Load More</span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    isShowLoadMore: {
      type: Boolean,
      required: true,
      default: false,
    },
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
