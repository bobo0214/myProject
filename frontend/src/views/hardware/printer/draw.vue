<script setup>
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import "vue-super-flow/lib/index.css";
import { onMounted, watch, ref, watchEffect } from "vue";
import SpecialNode from "../../../components/SpecialNode.vue";
const props = defineProps({
  nodesRef: Object,
});
const isTableVisible = ref(false);
const { nodes, addNodes, addEdges, onConnect, dimensions } = useVueFlow();
onConnect((params) => addEdges(params));

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
    console.log('Selected File:', file);
  }
  // 清空文件输入框，以便下次选择同一个文件触发change事件
  fileInput.value.value = '';
};
</script>
<template>
  <div style="width: 100%; height: 100%; background-color:#fff">
    <VueFlow class="interactionflow">
      <Background :variant="BackgroundVariant.Lines" />
      <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" @childClick="ToggleTable" />
      </template>
      <div class="new-edit-button">
        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
        <el-button type="primary" size="small" @click="openFileInput" round>新建配置</el-button>
        <el-button size="small" text><el-icon><EditPen /></el-icon>编辑</el-button>
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
  z-index: 100;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
</style>