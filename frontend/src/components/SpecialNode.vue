<!-- VueFlow中节点的样式 -->
<script setup>
import { Handle, Position, useVueFlow } from "@vue-flow/core";
import { ref, onMounted, onUnmounted, computed, defineEmits } from "vue";

const props = defineProps(["label", "id"]);
const emit = defineEmits();
//点击元素后出现阴影的效果
const isActive = ref(false);
const clickableElement = ref(null);
const isTableVisible = ref(false)
//切换阴影效果并切换表格显示
const toggleActive = () => {
  isActive.value = !isActive.value;
  isTableVisible.value = !isTableVisible.value
  emit('childClick', isTableVisible.value)
};
const handleClickOutside = () => {
  if (
    isActive.value &&
    clickableElement.value &&
    !clickableElement.value.contains(event.target)
  ) {
    isActive.value = false;
  }
};
//移除节点
const { removeNodes } = useVueFlow();
const removeNode = () => {
  removeNodes(props.id);
  emit('childClick', false)
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

//根据label的不同定义不同设备
const handlePositions = computed(() => {
  switch (props.label) {
    case "3803指令核":
      return [Position.Right];

    default:
      return [Position.Right, Position.Left];
  }
});
const getPositionClass = (position) => {
  switch (position) {
    case Position.Right:
      return "handle-text-right";
    case Position.Left:
      return "handle-text-left";
    default:
      return "handle-text-default";
  }
};
</script>
<template>
  <div
    class="node-item"
    @click="toggleActive(this)"
    :class="{ active: isActive }"
    ref="clickableElement"
  >
    {{ label }}
    <button
      :class="{ view: isActive }"
      class="close-button"
      @click="removeNode()"
    >
      ×
    </button>
  </div>

  <!-- <Handle
    v-for="position in handlePositions"
    :key="JSON.stringify(position)"
    type="source"
    :position="position"
    class="handle"
    ><div :class="['handle-text', getPositionClass(position)]">IRQ</div></Handle
  > -->
  <Handle :id="{test}"></Handle>

</template>
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
  position: relative;
}
.node-item.active {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
}
.close-button {
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
  visibility: hidden;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -6px;
  right: -6px;
}
.view {
  visibility: visible;
}
.close-button:hover {
  background-color: rgb(255, 69, 69);
}
.handle {
  width: 8px;
  height: 8px;
}
.handle-text-right {
  margin-left: 10px;
}

.handle-text-left {
  margin-right: 50px;
}

.handle-text-default {
  margin: 5px;
}
#test {
  position: absolute;
  top: 0;
  right: 20;
}
</style>
