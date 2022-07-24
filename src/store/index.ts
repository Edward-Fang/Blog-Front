import { defineStore } from 'pinia'
export const useUserStore = defineStore('main', {
  state: () => ({
    userInfo: null
  })
})
