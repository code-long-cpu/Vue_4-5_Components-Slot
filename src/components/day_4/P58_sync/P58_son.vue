<template>
  <div class="mask" v-show="visible">
    <div class="tanchuang">
      <div class="title">
        <span>温馨提示</span>
        <button class="close" @click="close">X</button>
      </div>
      <div class="body">
        <p>你确定要退出本系统吗？</p>
      </div>
      <div class="footer">
        <button class="queren" @click="close">确认</button>
        <button class="quxiao" @click="close">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
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

.mask {
  width: 100%;
  height: 200px;
  background-color: rgb(137, 137, 137, 0.3);
  /* border: solid 1px black; */
  transform: translateY(-30px);
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.tanchuang {
  width: 250px;
  height: 150px;
  /* border: solid 1px black; */
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 5px 2px rgb(171, 171, 171, 0.9);
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: solid 1px black;
}
.title span {
}
.close {
  width: 20px;
  height: 20px;
  line-height: 15px;
  cursor: pointer;
}
.footer {
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
}
.footer button {
  width: 150px;
  height: 30px;
  margin: 0 3px;
  cursor: pointer;
}
</style>