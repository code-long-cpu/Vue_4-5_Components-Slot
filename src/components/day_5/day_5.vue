<template>
  <div class="day_5">
    <h4>VUE-day5内容</h4>
    <tabbar>
      <template v-slot:subtitle>P75-P79 声明式导航</template>
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
      </template>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "../../components/day_4/slot/tabbar.vue";

export default {
  components: {
    tabbar,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.day_5 {
  width: 400px;
  height: 500px;
  border: solid 5px black;
  flex: none;
  border-radius: 10px;
  padding: 10px;
}
h4 {
  text-align: center;
}
</style>