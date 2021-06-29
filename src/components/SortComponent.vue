<template>
  <div class="sort-container">
    <div v-for="item in arr" v-bind:key="item.id">
      <div class="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "SortComponent",
  computed: {
    arr: {
      get() {
        return this.$store.state.arr;
      },    
    },
  },
  store,
};
</script>

<style scoped>
.sort-container {
  padding: 40px;
  display: flex;
}

.item {
  width: 40px;
  height: 40px;
  background-color: yellowgreen;
  margin: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>