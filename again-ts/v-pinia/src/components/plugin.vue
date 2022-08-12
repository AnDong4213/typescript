<template>
  <div class="plugins">
    <h1>{{ Message }}</h1>
    <h3>{{ $translate('greetings.hello') }}</h3>
  </div>
</template>

<script setup>

</script>

<script>
export default {
  name: "Plugins",
  inject: ['Message'],
};
</script>

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
