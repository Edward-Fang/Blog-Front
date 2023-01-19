<template>
  <div class="config-container">
    <div class="btn flex-center" @click="hideAside">
      <icon
        :icon="modelValue ? 'mdi:arrow-right-circle' : 'mdi:arrow-left-circle'"
      />
    </div>
    <div class="btn flex-center" @click="changeTheme">
      <icon
        :icon="sun ? 'mdi:moon-full' : 'mdi:white-balance-sunny'"
      />
    </div>
    <div class="btn flex-center" @click="scrollToTop">
      <icon icon="mdi:arrow-up-circle" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:modelValue'])

const hideAside = () => {
  emits('update:modelValue', !props.modelValue)
}

const scrollToTop = () => {
  document.documentElement.scrollTop = 0
}

const sun = ref(false)
const getCurrentTheme = () =>
  document.body.classList.contains('dark-theme') ? 'dark' : 'light'

const changeTheme = () => {
  document.body.classList.toggle('dark-theme')
  localStorage.setItem('save-theme', getCurrentTheme())
  const savedTheme = localStorage.getItem('save-theme')
  if (savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove'](
      'dark-theme'
    )
  }
  sun.value = savedTheme === 'dark'
}
</script>

<style lang="scss" scoped>
.config-container {
  z-index: 9999;
  position: fixed;
  right: 30px;
  bottom: 45px;
  width: 45px;
  cursor: pointer;

  .btn {
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--transparent-color-01);
  }
}
</style>
