<template>
  <div class="well">
    <img :src="catimgsrc" height="500" width="500"/>
  </div>
</template>


<script>
export default {
  computed: {
    catimgsrc() {
      return `http://thecatapi.com/api/images/get?size=med&ts=${this.$store.getters.getTimestamp}`;
    },
  },
};
</script>

<style scoped>
</style>
