<template>
  <div class="day_4">
    <h4>VUE-day4内容</h4>
    <!-- P52-小黑记事本组件版 -->
    <tabbar>
      <template v-slot:subtitle>P52-P54 小黑记事本组件版</template>
      <template v-slot:subcontent>
        <P52_xiaohei></P52_xiaohei>
      </template>
    </tabbar>
    <br />
    <tabbar>
      <template v-slot:subtitle>P55 非父子通信-事件总线（拓展）</template>
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
      </template>
    </tabbar>
    <!-- P52-小黑记事本组件版 -->
  </div>
</template>


<script>
import tabbar from "./slot/tabbar.vue";
import P52_xiaohei from "./P52_xiaoheinotes/P52_xiaohei.vue";
import P55_feifuzi from "./P55_feifuzi/AB.vue";

export default {
  name: "App",
  components: {
    tabbar,
    P52_xiaohei,
    P55_feifuzi,
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
}
h4 {
  text-align: center;
}
</style>