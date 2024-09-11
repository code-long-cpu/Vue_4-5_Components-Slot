<template>
  <div class="P58_father">
    <button @click="isShow = true">关闭</button>
    <div class="mask">
      <P58_son :visible.sync="isShow"></P58_son>
    </div>
    <!-- <div class="line"></div> -->
  </div>
</template>

<script>
import P58_son from "./P58_son";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    P58_son,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
  width: 60px;
  height: 30px;
}
.P58_father {
  height: 200px;
  position: relative;
}
.mask {
  /* transform: translateY(-30px); */
}

.line {
  position: absolute;
  width: 100%;
  height: 2px;
  border: solid 1px black;
  top: 200px;
}
</style>