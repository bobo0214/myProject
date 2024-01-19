
<script setup>
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background, BackgroundVariant } from '@vue-flow/background'
import { onMounted, watch, ref, watchEffect } from "vue";
import SpecialNode from "../../../components/SpecialNode.vue";
const props = defineProps({
  nodesRef: Object,
});

const { nodes, addNodes, addEdges, onConnect, dimensions } = useVueFlow();
onConnect((params) => addEdges(params))

watch(props.nodesRef, () => {
  addNodes([props.nodesRef])
})

</script>
<template>
  <div style="width: 100%, height: 100%">
    <VueFlow>
      <Background :variant="BackgroundVariant.Lines" />
      <template #node-special="specialNodeProps">
      <SpecialNode v-bind="specialNodeProps" />
    </template>
    </VueFlow>
  </div>
  
</template>
<style lang="less" scoped>

</style>

