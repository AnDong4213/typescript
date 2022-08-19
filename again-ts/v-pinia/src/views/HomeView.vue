<template>
  <div class="home">
    <HelloWorld msg="Welcome to Vue.js App"
                v-slot="slotProps">
      <h3>哈哈---{{ slotProps }}</h3>
    </HelloWorld>

    <HelloWorld msg="Welcome to Vue.js App-2">
      <!-- <template #[h2]="h2Props"> -->
      <template v-slot:[h2]="h2Props">
        <h2>{{ h2Props }}</h2>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      ha: '我是slot',
      h2: 'h2'
    }
  },
  mounted() {
    // console.log(this.$slots)
  }
};
</script>
