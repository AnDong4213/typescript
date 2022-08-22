<template>
  <div class="combination-function">
    <h3>CombinationFunction</h3>
    <h4>Mouse position is at: {{ x }}, {{ y }}</h4>

    Load post id:
    <button v-for="i in 9"
            :key="i"
            @click="id = i">{{ i }}</button>

    <div>
      <div v-if="error">
        <p>Oops! Error encountered: {{ error.message }}</p>
        <button @click="retry">Retry</button>
      </div>
      <div v-else-if="data">Data loaded:
        <pre>{{ data }}</pre>
      </div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useMouse } from '@/utils/mouse'
import { useFetch } from '@/utils/useFetch.js'

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref('1')
const url = computed(() => baseUrl + id.value)

const { data, error, retry } = useFetch(url)

const { x, y } = useMouse()
</script>

<style scoped lang="scss">
.h1 {
  cursor: pointer;
}
</style>
