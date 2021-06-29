<template>
  <div class="navigation">
    <span>Sorting Algorithm Visualizer</span>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.navigation {
  height: 60px;
  position: fixed;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  background-color: white;
}

span {
  padding-left: 20px;
  font-size: 24px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>