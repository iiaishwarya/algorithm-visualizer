<template>
  <div class="container">
    <LeftNavigation />
  </div>
</template>

<script>
import LeftNavigation from "./LeftNavigation.vue";
export default {
  name: "Container",
  components: {
    LeftNavigation,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin-top: 60px;
}
</style>