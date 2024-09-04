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
      <!-- 记事本组件尾 -->
    </div>
  </div>
</template>

<script>
import NoHead from "./Head.vue";

export default {
  components: {
    NoHead,
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
}
.main {
  width: 100%;
  height: 200px;
  background: red;
  margin-top: 5px;
  display: block;
}
.anniu {
  width: 50px;
}
.hidden {
  display: none;
}
</style>