<template>
  <div class="day_4">
    <h4>day4内容</h4>
    <!-- <h5>P52-小黑记事本组件版</h5> -->
    <P52_xiaohei></P52_xiaohei>
  </div>
</template>

<script>
import P52_xiaohei from "./P52_xiaoheinotes/P52_xiaohei.vue";

export default {
  name: "App",
  components: {
    P52_xiaohei: P52_xiaohei,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.day_4 {
  width: 400px;
  /* height: 500px; */
  border: solid 1px black;
  flex: none;
  padding: 10px;
  /* padding-bottom: 20px; */
}
h4 {
  text-align: center;
}
</style>