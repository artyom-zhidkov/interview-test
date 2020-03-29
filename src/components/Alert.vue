<template>
  <div>
    <v-alert
      v-if="isShowAlert"
      dismissible
      dark
      class="alert"
      transition="scale-transition"
      type="error">
      {{messageForAlert}}
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MovieView',
  computed: {
    ...mapState({
      isShowAlert: (state) => state.isShowAlert,
      messageForAlert: (state) => state.messageForAlert,
    }),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .alert {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
