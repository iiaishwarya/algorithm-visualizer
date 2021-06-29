import { createStore } from 'vuex';

const store = createStore({
  state: {
    arr: [],
  },
  getters: {
    getArr: (state) => {
      return state.arr;
    },
  },
  mutations: {
    updateArr: (state, arr) => {
      state.arr = arr;
    },
  },
  actions: (context) => {
    context.commit('updateArr');
  },
});

export default store;
