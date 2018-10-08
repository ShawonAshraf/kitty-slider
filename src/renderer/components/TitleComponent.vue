<template>
  <div>
    <h1>{{ title }}</h1>
    <em>{{ emmessage }}</em>
    <br>
    <em>With help from the friendly service @</em><a href="https://thecatapi.com/">thecatapi</a>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  data() {
    return {
      title: 'Kitty Slider',
      emmessage: 'Loads purr purr images from Tumbler',
    };
  },
};
</script>

<style scoped>

</style>
