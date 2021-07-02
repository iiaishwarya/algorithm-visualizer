import { createStore } from 'vuex';

const getDefaultState = () => {
  return {
    arr: [],
    i: -1,
    j: -1,
  };
};

const store = createStore({
  state: {
    ...getDefaultState(),
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
    getIndexesI: (state) => {
      return state.i;
    },
    getIndexesJ: (state) => {
      return state.j;
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
    updateIndexes: (state, indexes) => {
      let { i, j } = indexes;
      state.i = i;
      state.j = j;
    },
    resetState(state) {
      Object.assign(state, {
        ...getDefaultState(),
        sortingMethod: state.sortingMethod,
        sortingSpeed: state.sortingSpeed,
      });
    },
  },
  actions: (context) => {
    context.commit('updateArr');
    context.commit('updateIndexes');
  },
});

export default store;
