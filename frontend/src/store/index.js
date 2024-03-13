// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      nodes: [],
      edges: [],
    };
  },
  mutations: {
    setNodes(state, nodes) {
      state.nodes = nodes;
    },
    setEdges(state, edges) {
      state.edges = edges;
    },
    removeNode(state, id) {
      const array = state.nodes.filter(item => item.id !== id); 
      state.nodes = array;
    },
    removeEdge(state, id) {
      console.log(state.edges);
      const array = state.edges.filter(item => item.id !== id); 
      state.edges = array;
    },
  },
  actions: {
    // 异步增加计数器值的 action
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    // 异步减少计数器值的 action
    asyncDecrement(context) {
      setTimeout(() => {
        context.commit("decrement");
      }, 1000);
    },
  },
  getters: {
    // 获取当前计数器值的 getter
    getCount(state) {
      return state.count;
    },
  },
});

export default store;
