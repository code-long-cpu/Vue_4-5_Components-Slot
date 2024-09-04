<template>
  <div id="app">
    <h3>小龙学习vue项目</h3>
    <div class="content">
      <!-- day_4 -->
      <day_4></day_4>
      <!-- day_5 -->
      <day_5></day_5>
      <!-- day_6 -->
      <!-- day_7 -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import day_4 from "./components/day_4/day_4.vue";
import day_5 from "./components/day_5/day_5.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    day_4,
    day_5,
  },
};
</script>

<style scoped>
#app .content {
  display: flex;
}
h3 {
  width: 800px;
  text-align: center;
}
</style>
