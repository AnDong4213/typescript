<template>
  <div class="directives">
    <h3 v-drag:foo.bar="['.drag-dialog', '.el-dialog']">
      <span class="drag-dialog">drag-dialog</span> |
      <span class="el-dialog">el-dialog</span>
    </h3>
    <input v-focus />

    <div>
      <button id="counter"
              @click="increment">{{ count }}</button>
    </div>
  </div>
</template>

<script setup>
// 自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。
// 一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数

// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令

import { ref, nextTick } from 'vue'
const count = ref(0)

const vFocus = {
  mounted: (el, binding) => {
    el.focus()
  }
}

const vDrag = {
  mounted: (el, binding) => {
    console.log(el)
    // el.style.color = 'red'

    // console.log(binding)
    // console.log(binding.value)
    // console.log(binding.instance)

    binding.instance.$nextTick(() => {
      const dragDom = document.querySelector(binding.value[0])
      const dragHeader = document.querySelector(binding.value[1])

      console.log(dragDom)
      console.log(dragHeader)

    })
  }
}

async function increment() {
  count.value++

  // DOM 还未更新
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick()

  // DOM 此时已经更新
  console.log(document.getElementById('counter').textContent) // 1
  setTimeout(() => {
    console.log(document.getElementById('counter').textContent) // 1
  })
}

</script>

<style scoped lang="scss">
.h1 {
  cursor: pointer;
}
</style>
