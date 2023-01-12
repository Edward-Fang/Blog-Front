<template>
  <div class="main">
    <el-timeline>
      <el-timeline-item center timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item center timestamp="2018/4/2" placement="top">
        Event start
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        Event end
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 900px;
  padding: 50px;
  margin-bottom: 30px;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  background-color: var(--card-bg-color);
  overflow: hidden;
}
</style>
