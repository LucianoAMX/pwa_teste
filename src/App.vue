<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Tabela</router-link>
    </div>
    <router-view />
    <v-snackbar
      bottom
      right
      :value="updateExists"
      :timeout="-1"
      color="primary"
    >
      An update is available
      <v-btn text @click="refreshApp">
        Update
      </v-btn>
    </v-snackbar>
  </v-app>
</template>
<script>
import update from "./mixins/update";

export default {
  name: "App",
  data: () => ({
    //
  }),
  mixins: [update]
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
