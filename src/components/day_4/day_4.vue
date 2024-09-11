<template>
  <div class="day_4">
    <h4>VUE-day4内容</h4>
    <!-- <button>全部展开</button> -->

    <!-- P52-小黑记事本组件版 -->
    <tabbar>
      <template v-slot:subtitle>P52-P54 小黑记事本组件版</template>
      <template v-slot:subcontent>
        <P52_xiaohei></P52_xiaohei>
      </template>
    </tabbar>

    <!-- P55 非父子通信-事件总线（拓展） -->
    <tabbar>
      <template v-slot:subtitle>P55 非父子通信-事件总线（拓展）</template>
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
      </template>
    </tabbar>

    <!-- P56 非父子通信-provide和inject -->
    <tabbar>
      <template v-slot:subtitle>P56 非父子通信-provide和inject</template>
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
      </template>
    </tabbar>

    <!-- P57v-mode详解 -->
    <tabbar>
      <template v-slot:subtitle
        >P57
        v-mode详解(固定写法)(下面img困我3个小时，你妈是命名多了个空格)</template
      >
      <template v-slot:subcontent>
        <!-- <P52_xiaohei></P52_xiaohei> -->
        <p>
          ①vue中@input事件是检测输入框，每次输入框值变化，都会触发input事件。例如：<br />
          @input = 'msg =
          $event.target.value'表示每次输入框的值变化，就把值赋予给msg；
          <img v-bind:src="res" alt="" />
        </p>
        <hr />
        <p>②v-mode详解</p>
        <P57_father></P57_father>
        <P57_father></P57_father>
        <p>③实现按按钮就添加新窗口的命令，是通过push数据实现的；</p>
      </template>
    </tabbar>

    <tabbar>
      <template v-slot:subtitle> P58 sync修饰符（固定写法） </template>
      <template v-slot:subcontent>
        <P58_father></P58_father>
      </template>
    </tabbar>

    <tabbar>
      <template v-slot:subtitle> P59 ref与$refs获取dom元素与组件实例 </template>
      <template v-slot:subcontent>
        <!-- <P58_father></P58_father> -->
      </template>
    </tabbar>
  </div>
</template>


<script>
import tabbar from "./slot/tabbar.vue";
import P52_xiaohei from "./P52_xiaoheinotes/P52_xiaohei.vue";
import P55_feifuzi from "./P55_feifuzi/AB.vue";
import P57_father from "./P57_selected/P57_father.vue";
import P58_father from "./P58_sync/P58_father.vue";

export default {
  data() {
    return {
      res: require("../../../public/inpp.png"),
    };
  },
  methods: {},
  name: "App",
  components: {
    tabbar,
    P52_xiaohei,
    P55_feifuzi,
    P57_father,
    P58_father,
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
  border-radius: 10px;
  flex: none;
  padding: 10px;
  margin: 0 10px;
}
h4 {
  text-align: center;
  margin-bottom: 10px;
}
p {
  padding: 5px;
}
img {
  width: 350px;
  border: solid 1px black;
  display: block;
  margin: auto;
}
</style>