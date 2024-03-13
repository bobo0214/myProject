<script setup>
import { onMounted, ref, markRaw } from "vue";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import SpecialNode from "../../../components/SpecialNode.vue";
import SpecialEdge from "../../../components/SpecialEdge.vue";
import DigitalNode from "../../../components/DigitalNode.vue";
import TextNode from "../../../components/TextNode.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const selectCompt = ref(null);
const nodeContainer = ref(null);

const {
  addNodes,
  addEdges,
  onEdgeClick,
  findEdge,
  findNode,
  updateEdge,
  nodes,
  edges,
  onNodeDragStop
} = useVueFlow();
const store = useStore();
const prenodeList = computed(() => store.state.nodes);
const preedgeList = computed(() => store.state.edges);
onMounted(() => {
  // 初始化数据
  prenodeList.value.forEach((node) => {
    addNodes(node);
  });
  preedgeList.value.forEach((edge) => {
    addEdges(edge);
  });
});

//改变指向
function onEdgeUpdate({ edge, connection }) {
  const source = findNode(connection.source);
  const target = findNode(connection.target);
  console.log(source.data);
  if (source.accept !== undefined && !source.accept.includes(target.label)) {
    alert.value = true;
    return;
  } else {
    alert.value = false;
    return updateEdge(edge, connection);
  }
}

function onConnectEdge(params) {
  const source = findNode(params.source);
  const target = findNode(params.target);
  if (source.accept !== undefined && !source.accept.includes(target.label)) {
    alert.value = true;
    return;
  } else {
    alert.value = false;
    params.type = "special";
    params.updatable = true;
    params.data = { visable: false };

    store.commit("addEdges", params);
    return addEdges(params);
  }
}
onEdgeClick((params) => {
  const edge = findEdge(params.edge.id);
  edge.data.visable = !edge.data.visable;
});
//拖动后更新元素的位置
onNodeDragStop((event) => {
  store.commit("setNodes", nodes);
  store.commit("setEdges", edges);
})
</script>

<template>
  <div
    style="width: 100%; height: 100%; background-color: #fff"
    ref="nodeContainer"
  >
    <VueFlow
      class="interactionflow"
      :node-types="nodeTypes"
      @edge-update="onEdgeUpdate"
      @connect="onConnectEdge"
    >
      <Background :variant="BackgroundVariant.Lines" />
      <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" @childClick="ToggleTable" />
      </template>
      <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template>
      <div
        style="
          position: absolute;
          z-index: 99;
          height: 100%;
          background-color: #fff;
          border-right: 1px solid #d9d9d9;
        "
      >
        <el-scrollbar>
          <el-menu style="border-right: none"> </el-menu>
        </el-scrollbar>
      </div>
    </VueFlow>
  </div>
</template>

<style lang="less" scoped></style>
