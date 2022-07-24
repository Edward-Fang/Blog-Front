<template>
  <el-dialog v-model="dialogFormVisible" title="搜索" top="5vh" :lock-scroll="false">
    <el-form>
      <el-form-item label="请输入相关内容" :label-width="formLabelWidth">
        <el-input v-model="related" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const related = ref()

const pop = () => {
  dialogFormVisible.value = true
}
defineExpose({
  pop
})
</script>

<style lang="scss" scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
