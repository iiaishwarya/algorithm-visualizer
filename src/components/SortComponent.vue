<template>
  <div id="flip-list-demo" class="main-container">
    <transition-group name="flip-list" tag="ul" class="sort-container">
      <li
        v-for="(item, index) in arr"
        v-bind:key="item"
        v-bind:class="getClass(index)"
        v-bind:style="{ height: item + 'px' }"
      ></li>
    </transition-group>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "SortComponent",
  computed: {
    arr: {
      get() {
        return this.$store.getters.getArr;
      },
    },
    i: {
      get() {
        return this.$store.getters.getIndexesI;
      },
    },
    j: {
      get() {
        return this.$store.getters.getIndexesJ;
      },
    },
  },
  methods: {
    getClass: function (index) {
      if (this.i == index) {
        return "primary";
      } else if (this.j == index) {
        return "secondary";
      } else {
        return "";
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
}

.sort-container {
  display: flex;
  flex-flow: row;
}

li {
  width: 10px;
  background-color: yellowgreen;
  margin: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.flip-list-move {
  transition: transform 2s;
}
.primary {
  background-color: red;
}
.secondary {
  background-color: turquoise;
}
</style>