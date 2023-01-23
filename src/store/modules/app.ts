export const useAppStore = defineStore('app', {
  state: () => ({
    showAside: true
  }),
  getters: {
    show: state => state.showAside
  },
  actions: {
    changeState(newVal: boolean) {
      this.showAside = newVal
    }
  }
})
