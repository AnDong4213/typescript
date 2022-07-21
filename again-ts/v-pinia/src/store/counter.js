// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: '安东' }),
  actions: {
    increment() {
      this.count++
    },
  },
  // persist: ['count'],
  persist: {
    paths: ['count'],
    beforeRestore: (context) => {
      console.log('Before hydration...', context)
    },
    afterRestore: (context) => {
      console.log('After hydration...', context.store)
    },
  },
})

/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(10)

  function increment() {
    count.value++
  }

  return { count, increment }
}) */
