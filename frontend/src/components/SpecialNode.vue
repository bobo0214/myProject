<!-- VueFlow中节点的样式 -->
<template>   
  <div class="node-item" @click="toggleActive(this)" :class="{active: isActive}" ref="clickableElement">{{ label }}</div>
  <Handle type="source" :position="Position.Top" />
  <Handle type="source" :position="Position.Bottom" />
  <Handle type="source" :position="Position.Right" />
  <Handle type="source" :position="Position.Left" />
</template>
<script setup>
import { Handle, Position } from '@vue-flow/core'
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps(["label"]);
//点击元素后出现阴影的效果
const isActive = ref(false)
const clickableElement = ref(null)
const toggleActive = () => {
    isActive.value = !isActive.value;
}
const handleClickOutside = () => {
  if (isActive.value&& clickableElement.value && !clickableElement.value.contains(event.target)) {
    isActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
<style>
.node-item {
  border: 1px solid;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  }
}
.node-item.active {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
}
</style>