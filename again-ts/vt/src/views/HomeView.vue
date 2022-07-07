<template>
  <div class="home">
    <HelloWorld :msg="strRef" />
    <p ref="km" style="color: #42b983">开门</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, isRef } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  setup() {
    const strRef = ref<string>("911");
    type objType = {
      age: number;
      sex: string;
    };
    const obj: objType = {
      age: 3,
      sex: "0",
    };
    const objRef = ref<objType>(obj);
    console.log(strRef.value);
    console.log(objRef.value.sex);
    console.log(isRef(strRef));
    const km = ref();
    onMounted(() => {
      console.log(km.value);
    });

    return {
      strRef,
      km,
    };
  },
  components: {
    HelloWorld,
  },
});
</script>
