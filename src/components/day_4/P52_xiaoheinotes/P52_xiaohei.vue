<template>
  <div class="P52">
    <!-- <h5>P52-小黑记事本组件版</h5> -->
    <div class="tabar">
      <span>P52-小黑记事本组件版</span
      ><button class="anniu" @click="hide">打开</button>
    </div>
    <div class="main">
      <!-- 记事本组件头 -->
      <NoHead></NoHead>
      <!-- 记事本组件身 -->
      <NoBody></NoBody>
      <!-- 记事本组件尾 -->
      <NoFoot></NoFoot>
    </div>
  </div>
</template>

<script>
import NoHead from "./Head.vue";
import NoBody from "./Body.vue";
import NoFoot from "./Foot.vue";

export default {
  components: {
    NoHead,
    NoBody,
    NoFoot,
  },
  data() {
    return {
      metion: [{}],
    };
  },
  methods: {
    hide() {
      document.querySelector(".main").classList.toggle("hidden");
      const anniu = document.querySelector(".anniu");
      if (anniu.innerHTML === "打开") {
        anniu.innerHTML = "关闭";
      } else {
        anniu.innerHTML = "打开";
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.P52 {
  width: 100%;
  /* height: 200px; */
  border: solid 1px black;
  padding: 5px;
}
.tabar {
  display: flex;
  justify-content: space-between;
  /* border-bottom: solid 1px black; */
}
.main {
  /* width: 400px; */
  /* height: 200px; */
  /* background: red; */
  border-top: solid 1px black;
  margin-top: 5px;
  display: block;
  padding: 30px 0;
  /* position: absolute; */
  /* z-index: -100; */
}
.anniu {
  width: 50px;
  cursor: pointer;
}
.hidden {
  display: none;
}
</style>