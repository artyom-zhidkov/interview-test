<template>
  <div class="page-layout">
    <img
      alt="Batman logo"
      src="../assets/logo.png"
      class="logo"/>
    <HelloWorld :msg="msg"/>
    <MovieList />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MovieList,
  },
  computed: {
    ...mapState({
      userName: (state) => state.user.name,
    }),
    msg() {
      return `Hello ${this.userName}, which batman movie do you want to see?`;
    },
  },
};
</script>
<style lang="scss">
  .page-layout {
    text-align: center;
  }

  .logo {
    height: auto;
    @media screen and (max-width: 750px) {
      width: 100%;
    }
  }
</style>
