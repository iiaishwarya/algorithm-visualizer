<template>
  <div class="main-container">
    <button v-if="arr.length > 0">Start</button>
    <div class="sort-container">
      <div v-for="item in arr" v-bind:key="item.id">
        <div class="item">{{ item }}</div>
      </div>
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
.main-container {
  display: flex;
  flex-flow: column;
  padding: 40px;
}

.sort-container {
  padding-top: 40px;
  display: flex;
  flex-flow: row wrap;
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

button {
  width: 55px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>