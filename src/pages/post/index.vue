<template>
  <div class="main">
    <div class="message">
      <div class="title">{{ post.title }}</div>
      <div class="other">
        <span class="introduction">{{ post.introduction }}</span>
        <div class="flex-center">
          <icon icon="mdi:tag-heart-outline" size="small" />
          <span class="tag">标签 {{ post.tag }}</span>
          <icon icon="mdi:account" size="small" />
          <span>作者 {{ post.author }}</span>
        </div>
        <div class="flex-center">
          <icon icon="mdi:calendar-month-outline" size="small" />
          <span>创建时间 {{ post.createAt }}</span>
        </div>
        <div class="flex-center">
          <icon icon="mdi:calendar-month-outline" size="small" />
          <span>更新时间 {{ post.updateAt }}</span>
        </div>
      </div>
    </div>
    <el-divider />
    <div v-html="markdownToHtml" class="markdown-body"></div>
  </div>
</template>

<script lang="ts" setup>
import axios from '@/api'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const post = ref(<any>{})
const markdownToHtml = shallowRef('')
onBeforeMount(async () => {
  const route: any = useRoute()
  const res = await axios.getPostById(route.query.id)
  const { content, ...result } = res.data ?? {}
  post.value = result

  marked.setOptions({
    renderer: new marked.Renderer(), // 必填项
    gfm: true, // 默认：true， 启用Github的风格
    breaks: false, // 默认：false，启用回车换行，前提必须gfm: true
    pedantic: false, // 默认：false，尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误
    sanitize: false, // 默认：false，对输出进行过滤(清理)，将忽略任何已经输入的html代码(标签)
    smartLists: true, // 默认：true，使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉
    smartypants: false, // 默认：false，使用更为时髦的标点，比如在引用语法中加入破折号

    // 高亮的语法规范
    highlight: (code: any) => hljs.highlightAuto(code).value
  })

  markdownToHtml.value = marked(content)
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 1000px;
  padding: 50px;
  margin-bottom: 30px;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  background-color: var(--card-bg-color);
  overflow: hidden;

  .message {
    text-align: center;
    .title {
      font-size: 30px;
      font-weight: 600;
    }

    .other {
      opacity: 0.5;
      .introduction {
        font-size: 16px;
      }
      .tag {
        margin-right: 10px;
      }
    }
  }
}
</style>
