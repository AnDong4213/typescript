// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
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
