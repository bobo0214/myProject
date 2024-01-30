<script setup>
import { onMounted, ref, markRaw } from "vue";
import MenuItem from "./MenuItem.vue";
import data from "./model.js";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import SelectNode from "../../../components/SelectNode.vue"
import DigitalNode from "../../../components/DigitalNode.vue";
import TextNode from "../../../components/TextNode.vue";
const selectMenu = ref([]);
const selectCompt = ref(null);
const nodeContainer = ref(null);
const nodeTypes = {
  select: markRaw(SelectNode),
  digital: markRaw(DigitalNode),
  textnode: markRaw(TextNode),
}
onMounted(() => {
  // 初始化数据
  selectMenu.value = data;
  console.log(data);
});
const { nodes, addNodes, addEdges, onConnect, dimensions } = useVueFlow()

onConnect((params) => addEdges(params))

const addRandomNode = (e) => {
  const nodeId = (nodes.value.length + 1).toString();
  let type;
  if(e.index === "1") type = "select";
  else if(e.index === "2") type = "digital";
  else type = "textnode";
  console.log(e.index);
  const newNode = {
    id: nodeId,
    label: `Node: ${nodeId}`,
    position: { x: dimensions.value.width / 2, y: dimensions.value.height / 2 },
    type: type,
  }
  addNodes([newNode])
}
</script>

<template>
  <div
    style="width: 100%; height: 100%; background-color: #fff"
    ref="nodeContainer"
  >
    <VueFlow class="interactionflow" :node-types="nodeTypes">
      <Background :variant="BackgroundVariant.Lines" />
      <template #node-select="selectNodeProps">
        <SelectNode v-bind="selectNodeProps" />
      </template>
      <div style="position: absolute; z-index: 99; height: 100%; background-color: #fff; border-right: 1px solid #d9d9d9;">
        <el-scrollbar>
          <el-menu
            :default-openeds="['model_1', 'DSS1']"
            class="el-menu-vertical-demo"
            style="border-right: none;"
          >
            <template v-for="menuItem in selectMenu" :key="menuItem.id">
              <MenuItem :menuItem="menuItem"></MenuItem>
            </template>
          </el-menu>
          <el-divider style="margin: 0" />
          <el-menu style="border-right: none;">
            <el-menu-item index="1" @click="addRandomNode" ref="selectCompt">
              <el-icon><Tickets /></el-icon>
              <span>数据注入控件-选择框</span>
            </el-menu-item>
            <el-menu-item index="2" @click="addRandomNode">
              <el-icon><Tickets /></el-icon>
              <span>数据注入控件-数值</span>
            </el-menu-item>
            <el-menu-item index="3" @click="addRandomNode">
              <el-icon><Tickets /></el-icon>
              <span>数据注入控件-文字控件</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </div>

    </VueFlow>
  </div>
</template>

<style lang="less" scoped></style>
