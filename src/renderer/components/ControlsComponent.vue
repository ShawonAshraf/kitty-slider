<template>
<div>
    <span>
    <button class="btn btn-success" :disabled='isStarted && !isPaused' @click="start">
      Show me the cats!
    </button>
  </span>

  <span>
    <button class="btn btn-danger" :disabled='!isStarted' @click="pause">
      Stop right there!
    </button>
  </span>
</div>
</template>

<style scoped>
  button:disabled i {
    color: gray;
  }
</style>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['isStarted', 'isStopped', 'isPaused']),
  methods: mapActions(['start', 'stop', 'pause']),
};
</script>
