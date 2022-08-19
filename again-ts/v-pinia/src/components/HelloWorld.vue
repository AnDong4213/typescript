<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins ---- {{ counter.count }}</h3>
    {{ $data }}--{{ $props }}
    <h4>{{ i18n.greetings.hello }}</h4>
    <!-- <slot name="h2"></slot>
    <slot></slot> -->

    <template v-for="(idx, slotName) in $slots">
      <slot :name="slotName"
            v-bind="slotObj"></slot>
    </template>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
// counter.count++
// counter.$patch({ count: counter.count + 1 })
// counter.increment()
</script>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      age: 9,
      slotObj: {
        age: 3,
        sex: 'female'
      }
    }
  },
  inject: ['i18n'],
  mounted() {
    /* console.log(this.$el)
    console.log(this.$options)
    console.log(this.$parent)
    console.log(this.$refs)
    console.log('$attrs', this.$attrs) */
    console.log(this.$slots)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
