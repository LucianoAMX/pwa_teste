<template>
  <div class="home">
    <img alt="Vue logo" width="200px" height="200px" src="../assets/logo.png" />
    <HelloWorld msg="bem vindo ao PWA" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
