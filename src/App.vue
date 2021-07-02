<template>
  <Navigation />
  <Container />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Container from "./components/Container.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Container,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
body {
  margin: 0;
  display: flex;
  overflow-y: hidden;
}
</style>
