<template>
  <div class="about">
    <h1 class="h1" @click="add">This is an about page</h1>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()

const add = () => {
  console.log(99)
  counter.increment()
}
</script>

<style scoped lang="scss">
.h1 {
  cursor: pointer;
}
</style>
