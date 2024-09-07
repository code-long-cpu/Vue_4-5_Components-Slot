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

    <br />

    <tabbar>
      <template v-slot:subtitle>P56 非父子通信-provide和inject</template>
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
      </template>
    </tabbar>

    <br />

    <tabbar>
      <template v-slot:subtitle>P57 v-mode详解</template>
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
        ①vue中@input事件是检测输入框，每次输入框值变化，都会触发事件。例如：<br />
        @input = 'msg =
        $event.target.value'表示每次输入框的值变化，就把值赋予给msg；
        <img src="" alt="" />
        <br />
        <br />
        ②实现按按钮就添加新窗口的命令，是通过push数据实现的；
      </template>
    </tabbar>
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
  margin-bottom: 10px;
}
</style>