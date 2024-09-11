<template>
  <div class="tabbar">
    <div class="titile">
      <span><slot name="subtitle"></slot></span
      ><button class="slot_button" @click="hide">{{ text }}</button>
    </div>
    <div class="blank" v-show="info">
      <slot name="subcontent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // data是个函数，维护独立的一份数据
  props: {},
  data() {
    return {
      info: false,
      text: "展开",
      res: require("../../../assets/card.png"),
    };
  },

  methods: {
    // 主要是修改data数据
    hide() {
      this.info = !this.info;
      // document.querySelector(".slot_button").innerHTML = "关闭";
      // const slot_button = document.querySelector(".slot_button");
      if (this.text !== "关闭") {
        this.text = "关闭";
      } else {
        this.text = "展开";
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
.tabbar {
  width: 100%;
  /* height: 200px; */
  /* border: solid 1px black; */
  /* padding: 5px; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px 2px rgb(161, 161, 161, 0.8);
  margin: 10px auto;
}
.titile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: solid 1px black; */
  background-color: yellow;
  padding: 5px;
  font-weight: 500;
  overflow: hidden;
  /* background-image: url("../../../assets/card.png"); */
  background-size: 90%;
  background-position: 150% 15%;
}
.titile span {
  /* border: solid 1px black; */
  width: 300px;
  display: inline-block;
  padding-left: 20px;
  /* color: white; */
}
.blank {
  /* width: 400px; */
  /* height: 200px; */
  /* background: red; */
  border-top: solid 1px rgb(161, 161, 161, 0.8);
  /* margin: 5px 0; */
  padding: 10px 0 20px 0;
}
.slot_button {
  width: 50px;
  height: 25px;
  cursor: pointer;
  border: solid 1px rgb(185, 185, 185);
  border-radius: 6px;
}
</style>