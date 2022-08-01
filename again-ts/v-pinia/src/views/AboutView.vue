<template>
  <div class="about">
    <h1 class="h1" @click="add">This is an about page</h1>
    <h2 @click="action">{{ counter.name }}--{{ counter.count }}</h2>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()

const add = () => {
  console.log(99)
  counter.increment()
}

const action = () => {
  counter.$reset()
}

onMounted(() => {
  counter.$state = {
    count: 89,
    name: '呵呵'
  }
})
</script>

<style scoped lang="scss">
.h1 {
  cursor: pointer;
}
</style>
