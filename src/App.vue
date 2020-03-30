<template>
  <div id="app-vue">
    <v-app>
      <router-view/>
      <Alert />
    </v-app>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue';

export default {
  components: {
    Alert,
  },
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
  @import url("https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css");

#app-vue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2%;
  tr:hover {
    background: white;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>
