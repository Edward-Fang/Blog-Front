<template>
  <div class="aside">
    <div class="aside-item flex a-center flex-column">
      <el-avatar
        shape="square"
        :size="100"
        fit="fill"
        src="src/assets/images/avatar.jpg"
      />
      <div class="message flex flex-column">
        <h5>Edward</h5>
        <h6>前端学习者</h6>
        <span>骑行、电影</span>
      </div>
      <div class="contact flex j-sa">
        <el-link :underline="false"><mdi-folder-search class="v-icon medium" /></el-link>
        <el-link :underline="false"><mdi-folder-search class="v-icon medium" /></el-link>
        <el-link :underline="false"><mdi-folder-search class="v-icon medium" /></el-link>
      </div>
    </div>
    <div class="aside-item">
      <el-card class="">
        <template #header>
          <div class="">
            <span>Card name</span>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.aside {
  width: 25%;
  margin-left: 30px;

  .aside-item {
    min-width: 250px;
    padding: 50px;
    margin-bottom: 30px;
    background-color: var(--card-bg-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow);

    .message {
      margin-top: 30px;
      text-align: center;
      h5 {
        margin-bottom: 10px;
        font-size: var(--max-font-size);
        font-weight: 500;
      }
      h6 {
        margin-bottom: 10px;
        font-size: var(--large-font-size);
        font-weight: 500;
      }

      span {
        margin-bottom: 20px;
        font-size: large;
      }
    }

    .contact {
      width: 70%;
      font-size: larger;
    }
  }
}

@media screen and (max-width: 1070px) {
  .aside {
    display: flex;
  }
}
</style>
