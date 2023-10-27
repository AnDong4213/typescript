<template>
  <div class="about">
    <h1 class="h1"
        @click="add">This is an about page</h1>
    <h2 @click="action">{{ counter.name }}--{{ counter.count }}</h2>

    <div style="margin: 30px;background-color: beige;">
      <div class="nav"></div>
      <div class="nav navActive"></div>
      <div class="nav"></div>
    </div>
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

.nav {
  height: 60px;
}

.navActive {
  background-color: #fff;
  color: rgb(0, 63, 136);
  position: relative;
}

.navActive::before,
.navActive::after {
  content: '';
  display: block;
  height: 8px;
  width: 8px;
  position: absolute;
  bottom: 0;
  background: radial-gradient(6px at 6px 0px,
      transparent 6px,
      #fff 6px);
}

.navActive::before {
  right: 0;
  bottom: calc(-1 * 6px);
  transform: scale(-1);
}

.navActive::after {
  right: 0;
  top: calc(-1 * 6px);
  transform: scaleX(-1);
}
</style>
