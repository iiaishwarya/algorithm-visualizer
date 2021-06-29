<template>
  <div class="left-navigation">
    <div class="section">
      <div class="heading">Select a sorting Algorithm</div>
      <div class="radio-buttons">
        <input
          type="radio"
          id="selection"
          name="algorithm"
          value="selection"
          v-model="sortingMethod"
        />
        <label for="selection">Selection Sort</label><br />
      </div>
      <div class="radio-buttons">
        <input
          type="radio"
          id="bubble"
          name="algorithm"
          value="bubble"
          v-model="sortingMethod"
        />
        <label for="bubble">Bubble Sort</label><br />
      </div>
      <div class="radio-buttons">
        <input
          type="radio"
          id="merge"
          name="algorithm"
          value="merge"
          v-model="sortingMethod"
        />
        <label for="merge">Merge Sort</label><br />
      </div>
      <div class="radio-buttons">
        <input
          type="radio"
          id="insertion"
          name="algorithm"
          value="insertion"
          v-model="sortingMethod"
        />
        <label for="insertion">Insertion Sort</label><br />
      </div>
    </div>
    <div class="section">
      <div class="heading">Select speed of sorting</div>
      <div class="slider">
        <input
          type="range"
          min="1"
          max="20"
          id="sort-range"
          v-model="sortingSpeed"
        />
      </div>
    </div>
    <div class="section">
      <div class="heading">Select number of elements in array</div>
      <div class="inputs">
        <input
          type="number"
          step="1"
          min="5"
          max="20"
          id="lengthOfArray"
          v-model="lengthOfArray"
        />
      </div>
      <div class="inputs">
        <button v-on:click="generateArray">Generate Random Array</button>
      </div>
    </div>
  </div>
</template>

<script>
import { generateArray } from "../helpers/generateArray";
import store from "../store";

export default {
  name: "LeftNavigation",
  data() {
    return {
      sortingMethod: "selection",
      sortingSpeed: 1,
      lengthOfArray: 5,
    };
  },
  store,
  methods: {
    generateArray: function () {
      this.$store.commit("updateArr", generateArray(this.lengthOfArray));
    },
  },
};
</script>

<style scoped>
.left-navigation {
  padding: 0 20px;
  display: grid;
  grid-template-rows: 30% 15% 55%;
  width: 40vh;
  box-shadow: 0 3px 6px rgb(57 63 72 / 30%);
  height: 100vh;
  position: fixed;
  z-index: 3;
}

.section {
  border-bottom: 1px solid rgb(57 63 72 / 30%);
  display: flex;
  flex-flow: column;
  padding-top: 20px;
}

.heading {
  font-size: 20px;
  text-align: left;
}
.radio-buttons,
.slider,
.inputs {
  width: 100%;
  display: flex;
  padding: 10px 0;
}
.slider > input,
.inputs > input {
  width: 100%;
}

.inputs > input {
  border-radius: 5px;
  border: 1px solid rgb(57 63 72 / 30%);
  padding-left: 10px;
  height: 30px;
}

button {
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #41b783;
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
</style>