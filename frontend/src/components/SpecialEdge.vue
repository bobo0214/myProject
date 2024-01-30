<script setup>
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useVueFlow,
} from "@vue-flow/core";
import { defineProps, computed, ref, onMounted } from "vue";
// props were passed from the slot using `v-bind="customEdgeProps"`
const props = defineProps([
  "id",
  "sourceX",
  "sourceY",
  "targetX",
  "targetY",
  "sourcePosition",
  "targetPosition",
  "data",
]);

const { removeEdges } = useVueFlow();
const path = computed(() => getBezierPath(props));


</script>

<template>
  <BezierEdge
    :source-x="sourceX"
    :source-y="sourceY"
    :target-x="targetX"
    :target-y="targetY"
    :source-position="sourcePosition"
    :target-position="targetPosition"
    style="cursor: pointer"
  />
  <EdgeLabelRenderer>
    <div
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
      v-if="data.visable"
    >
      <button class="edgebutton" @click="removeEdges(id)" >×</button>
    </div>
  </EdgeLabelRenderer>
</template>
<style>
.edgebutton {
  background-color: rgb(255, 132, 132);
  padding: 0;
  color: #fff;
  border: none;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  cursor: pointer;
  border-radius: 50%;
  outline: none;
  position: absolute;
  width: 16px;
  height: 16px;
  z-index: 99;
}
.edgebutton:hover {
  background-color: rgb(255, 69, 69);
}
</style>
