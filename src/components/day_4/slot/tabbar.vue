<template>
  <div class="tabbar">
    <div class="titile">
      <span><slot name="subtitle"></slot></span
      ><button class="slot_button" @click="hide">展开</button>
    </div>
    <div class="blank" v-show="info">
      <slot name="subcontent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: true,
    };
  },

  methods: {
    hide() {
      this.info = !this.info;
      // const slot_button = document.querySelector(".slot_button");
      // if (this.info === "关闭") {
      //   this.info = "打开";
      // } else {
      //   this.info = "关闭";
      // }
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
.tabbar {
  width: 100%;
  /* height: 200px; */
  border: solid 1px black;
  padding: 5px;
}
.titile {
  display: flex;
  justify-content: space-between;
  /* border-bottom: solid 1px black; */
}
.blank {
  /* width: 400px; */
  /* height: 200px; */
  /* background: red; */
  border-top: solid 1px black;
  margin: 5px 0;
  padding: 10px 0;
}
.slot_button {
  width: 50px;
  cursor: pointer;
}
</style>