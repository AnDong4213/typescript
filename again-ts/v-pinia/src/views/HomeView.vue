<template>
  <div class="home">
    <HelloWorld msg="Welcome to Vue.js App"
                v-slot="slotProps"
                class="hahaha">
      <h3>哈哈---{{ slotProps }}</h3>
    </HelloWorld>

    <hello-world msg="Welcome to Vue.js App-2">
      <template #[h2]="h2Props">
        <!-- <template v-slot:[h2]="h2Props"> -->
        <div style="color: blueviolet">{{ h2Props }}</div>
        <h3 style="color: blue">{{ h2Props.sex }}</h3>
      </template>
    </hello-world>

    <div class="666">
      <div v-for="(editorName, propName) in COMMON_PROPERTIES"
           :key="propName">
        <span>{{ editorName }}--{{ propName }}</span>
      </div>
      <div v-for="(item, index) in COMMON_PROPERTIES2"
           :key="item.type">
        <span>{{ item.type }}--{{ index }}</span>
      </div>
    </div>
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
      h2: 'h2',
      COMMON_PROPERTIES: {
        name: 'name-editor',
        label: 'label-editor',
        labelAlign: 'labelAlign-editor',
        type: 'type-editor',
        defaultValue: 'defaultValue-editor',
        placeholder: 'placeholder-editor',
        startPlaceholder: 'startPlaceholder-editor',
        endPlaceholder: 'endPlaceholder-editor',
        columnWidth: 'columnWidth-editor',
      },
      COMMON_PROPERTIES2: [
        { type: 1 },
        { type: 2 }
      ]
    }
  },
  mounted() {
    // console.log(this.$options)
    console.log(this.$options.components['HelloWorld'])
    console.log(this.$options.components['hello-world'])
  }
};
</script>
