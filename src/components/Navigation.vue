<template>
  <div class="navigation">
    <span>Sorting Algorithm Visualizer</span>
    <div>
      <button v-if="arr.length > 0" v-on:click="startSorting">Start</button>
    </div>
  </div>
</template>

<script>
import store from "../store";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
} from "../helpers/algorithms/sortingAlgorithms";
export default {
  name: "Navigation",
  computed: {
    arr: {
      get() {
        return this.$store.getters.getArr;
      },
    },
  },
  methods: {
    startSorting: function () {
      let sortingMethod = this.$store.getters.getSortingMethod;
      switch (sortingMethod) {
        case "bubble":
          for (let i = 0; i < this.arr.length; i++) {
            setTimeout(() => {
              let { arr, j } = bubbleSort(this.arr, i);
              this.$store.commit("updateArr", arr);
              this.$store.commit("updateIndexes", { i, j });
            }, i * 100 * this.$store.getters.getSortingSpeed);
          }
          setTimeout(() => {
            this.$store.commit("updateIndexes", { i: -1, j: -1 });
          }, 100 * this.$store.getters.getSortingSpeed * this.arr.length);

          break;
        case "selection":
          for (let i = 0; i < this.arr.length - 1; i++) {
            setTimeout(() => {
              let { arr, j } = selectionSort(this.arr, i);
              this.$store.commit("updateArr", arr);
              this.$store.commit("updateIndexes", { i, j });
            }, i * 100 * this.$store.getters.getSortingSpeed);
          }
          setTimeout(() => {
            this.$store.commit("updateIndexes", { i: -1, j: -1 });
          }, 100 * this.$store.getters.getSortingSpeed * this.arr.length);

          break;
        case "insertion":
          for (let i = 1; i < this.arr.length; i++) {
            setTimeout(() => {
              this.$store.commit("updateArr", insertionSort(this.arr, i));
            }, i * 100 * this.$store.getters.getSortingSpeed);
          }
          break;
        default:
          console.log("what");
          break;
      }
    },
    store,
  },
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
  justify-content: space-between;
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

button {
  width: 55px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-right: 40px;
  background-color: #41b783;
  color: white;
}
</style>