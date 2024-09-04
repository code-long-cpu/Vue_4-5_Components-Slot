<template>
  <div class="P52">
    <!-- <h5>P52-小黑记事本组件版</h5> -->
    <div class="tabar">
      <span>P52-小黑记事本组件版</span
      ><button class="anniu" @click="hide">关闭</button>
    </div>
    <div class="main">
      <!-- 记事本组件头 -->
      <NoHead @add="add"></NoHead>
      <!-- 记事本组件身 -->
      <NoBody @delet="deletM" :mission="mission"></NoBody>
      <!-- 记事本组件尾 -->
      <NoFoot :mission="mission" @clear="clear"></NoFoot>
      <!-- <NoFoot v-show="mission.length > 0"></NoFoot> -->
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
      mission: JSON.parse(localStorage.getItem("mission")) || [
        { id: 1, name: "跑步" },
        { id: 2, name: "做作业" },
        { id: 3, name: "睡大觉" },
      ],
    };
  },
  methods: {
    hide() {
      document.querySelector(".main").classList.toggle("hidden");
      const anniu = document.querySelector(".anniu");
      if (anniu.innerHTML === "关闭") {
        anniu.innerHTML = "打开";
      } else {
        anniu.innerHTML = "关闭";
      }
    },
    add(newtodo) {
      this.mission.unshift({
        id: +new Date(),
        name: newtodo,
      });
    },
    deletM(id) {
      this.mission = this.mission.filter((item) => item.id !== id);
    },
    clear() {
      // 清空数据是吧数组为空数组，而不是null
      this.mission = [];
    },
  },
  watch: {
    mission: {
      deep: true,
      handler(newVaule) {
        localStorage.setItem("mission", JSON.stringify(newVaule));
      },
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
  display: hidden;
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