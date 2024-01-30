<script setup>
import {ref, defineEmits} from "vue";
const emit = defineEmits();
//表格的编辑删除按钮操作
const handleEdit = (index, row) => {
  row.editing = true; // 点击编辑时将 editing 设置为 true
};
const handleSave = (index, row) => {
  row.editing = false; // 保存编辑后将 editing 设置为 false
};

const handleDelete = (index, row) => {
  tableData.value.splice(index, 1); // 通过 splice 方法删除对应的行
};
const tableData = ref([
  {
    topic: "TOPIC1",
    equip: "RS422",
    role: "RW",
  },
]);
const onAddItem = () => {
  console.log("click")
  tableData.value.push({
    topic: "TOPIC1",
    equip: "RS422",
    role: "RW",
  });
};
const closeTable = () => {
  emit("childClick", false);
}
</script>
<template>
  <div class="elTableContainer">
    <button class="table-close" @click="closeTable">x</button>
    <div style="color: #fff; font-size: 16px; font-weight: 400; text-align: left;">DDS客户端配置</div>
    <el-table :data="tableData" border width="380px">
      <el-table-column prop="topic" label="主题">
        <template #default="scope">
          <!-- 根据 editing 判断展示文本或输入框 -->
          <span v-if="!scope.row.editing">{{ scope.row.topic }}</span>
          <el-input v-else v-model="scope.row.topic" size="small" />
        </template>
      </el-table-column>
      <el-table-column prop="equip" label="设备">
        <template #default="scope">
          <!-- 根据 editing 判断展示文本或输入框 -->
          <span v-if="!scope.row.editing">{{ scope.row.equip }}</span>
          <el-input v-else v-model="scope.row.equip" size="small" />
        </template>
      </el-table-column>
      <el-table-column prop="role" label="权限">
        <template #default="scope">
          <!-- 根据 editing 判断展示文本或输入框 -->
          <span v-if="!scope.row.editing">{{ scope.row.role }}</span>
          <el-input v-else v-model="scope.row.role" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150px">
        <template #default="scope">
          <!-- 根据 editing 判断展示编辑或保存按钮 -->
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)" v-if="!scope.row.editing">
            修改
          </el-button>
          <el-button size="small" type="success" @click="handleSave(scope.$index, scope.row)" v-else>
            保存
          </el-button>
          
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem">
      <el-icon style="margin: 5px"><CirclePlus /></el-icon>新增</el-button
    >
  </div>
</template>
<style>
.elTableContainer {
  width: 450px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  right: 100px;
  z-index: 99;
  background-color: #c5eafb;
}
.table-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  color: #fff;
  line-height: 20px;
  text-align: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
}
.table-close:hover {
  background-color: rgb(0, 0, 0, 0.3);
}
</style>
