import { createStore } from 'vuex';

const store = createStore({
  state: {
    arr: [],
    sortingMethod: 'selection',
    sortingSpeed: '1',
  },
  getters: {
    getArr: (state) => {
      return state.arr;
    },
    getSortingMethod: (state) => {
      return state.sortingMethod;
    },
    getSortingSpeed: (state) => {
      return state.sortingSpeed;
    },
  },
  mutations: {
    updateArr: (state, arr) => {
      state.arr = arr;
    },
    setSortingMethod: (state, method) => {
      state.sortingMethod = method;
    },
    setSortingSpeed: (state, speed) => {
      state.sortingSpeed = speed;
    },
  },
  actions: (context) => {
    context.commit('updateArr');
  },
});

export default store;
