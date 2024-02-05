<script setup>
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import SuperFlow from "vue-super-flow";
import "vue-super-flow/lib/index.css";
import { onMounted, watch, ref, watchEffect } from "vue";
import SpecialNode from "../../../components/SpecialNode.vue";
import InteractionControls from "./interActionTable.vue";
import SpecialEdge from "../../../components/SpecialEdge.vue";
const props = defineProps({
  nodesRef: Object,
});
const isTableVisible = ref(false);
const alert = ref(false);
const {
  nodes,
  addNodes,
  addEdges,
  onConnect,
  dimensions,
  updateEdge,
  onEdgeMouseEnter,
  onEdgeMouseLeave,
  getSelectedEdges,
  getSelectedNodes,
  removeEdges,
  removeNodes,
  onEdgeClick,
  findEdge,
  findNode,
  removeSelectedElements,
} = useVueFlow();
// onConnect((params) => {
//   const source = findNode(params.source);
//   const target = findNode(params.target);
//   if (source.accept !== undefined && !source.accept.includes(target.label)) {
//     console.log(1)
//     alert.value = true;
//     removeEdges(params);
//   } else {
//     params.type = "special";
//     params.updatable = true;
//     params.data = { visable: false };
//     addEdges(params);
//   }
// });
//改变指向
function onEdgeUpdate({ edge, connection }) {
  const source = findNode(connection.source);
  const target = findNode(connection.target);
  console.log(source.data)
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
  console.log(source.data)
  if (source.accept !== undefined && !source.accept.includes(target.label)) {
    alert.value = true;
    return;
  } else {
    alert.value = false;
    params.type = "special";
    params.updatable = true;
    params.data = { visable: false };
    return addEdges(params);
  }
}

watch(props.nodesRef, () => {
  addNodes([props.nodesRef]);
});
const ToggleTable = (value) => {
  isTableVisible.value = value;
};

const fileInput = ref(null);

const openFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // 处理文件，例如上传或读取文件内容
    console.log("Selected File:", file);
  }
  // 清空文件输入框，以便下次选择同一个文件触发change事件
  fileInput.value.value = "";
};
const alertClose = () => {
  alert.value = false;
};
onEdgeClick((params) => {
  const edge = findEdge(params.edge.id);
  edge.data.visable = !edge.data.visable;
});
</script>
<template>
  <div style="width: 100%; height: 100%; background-color: #fff">
    <VueFlow
      class="interactionflow"
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
      <InteractionControls v-if="isTableVisible" @childClick="ToggleTable">
      </InteractionControls>
      <el-alert
        title="此设备不能相连"
        v-if="alert"
        type="warning"
        center
        show-icon
        @close="alertClose"
        style="
          position: absolute;
          width: 200px;
          z-index: 100;
          left: 50%;
          transform: translateX(-50%);
        "
      />
      <div class="new-edit-button">
        <input
          type="file"
          ref="fileInput"
          @change="handleFileChange"
          style="display: none"
        />
        <el-button type="primary" size="small" @click="openFileInput" round
          >新建目标机</el-button
        >
        <el-button size="small" text
          ><el-icon><EditPen /></el-icon>编辑</el-button
        >
      </div>
      <el-button type="primary" class="start">启动</el-button>
    </VueFlow>
  </div>
</template>
<style lang="less" scoped>
.start {
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 99;
}
.new-edit-button {
  position: absolute;
  width: 100%;
  height: 30px;
  z-index: 99;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
</style>
