<template>
  <div id="app">
    <title-component></title-component>

    <controls-component></controls-component>

    <br>
    <br>
    <kittens-component></kittens-component>

    <footer-component></footer-component>
  </div>
</template>


<script>
  import ControlsComponent from '@/components/ControlsComponent';
  import KittensComponent from '@/components/KittensComponent';
  import TitleComponent from '@/components/TitleComponent';
  import FooterComponent from '@/components/FooterComponent';

  export default {
    name: 'kitty-slider',
    components: {
      FooterComponent, TitleComponent, KittensComponent, ControlsComponent,
    },
  };
</script>

<style>
  /* CSS */
</style>
