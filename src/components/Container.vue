<template>
  <div class="container">
    <LeftNavigation />
    <SortComponent />
  </div>
</template>

<script>
import LeftNavigation from "./LeftNavigation.vue";
import SortComponent from "./SortComponent.vue";
export default {
  name: "Container",
  components: {
    LeftNavigation,
    SortComponent,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  margin-top: 60px;
}
</style>