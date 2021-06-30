<template>
  <div id="flip-list-demo" class="main-container">
    <button v-if="arr.length > 0" v-on:click="startSorting">Start</button>
    <transition-group name="flip-list" tag="ul" class="sort-container">
      <li v-for="item in arr" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
    <!-- {{ comp1 }}   -->
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
  name: "SortComponent",
  computed: {
    arr: {
      get() {
        return this.$store.state.arr;
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
              this.$store.commit("updateArr", bubbleSort(this.arr, i));
            }, i * 100 * this.$store.getters.getSortingSpeed);
          }

          break;
        case "selection":
          for (let i = 0; i < this.arr.length - 1; i++) {
            setTimeout(() => {
              this.$store.commit("updateArr", selectionSort(this.arr, i));
            }, i * 100 * this.$store.getters.getSortingSpeed);
          }
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

li {
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
.flip-list-move {
  transition: transform 2s;
}
</style>