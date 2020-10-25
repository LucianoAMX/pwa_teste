<template>
  <div class="home">
    <img alt="Vue logo" width="150px" height="150px" src="../assets/logo.png" />
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
