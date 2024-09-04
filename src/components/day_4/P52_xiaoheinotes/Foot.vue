<template>
  <div class="NoteFoot">
    <span>任务量：{{ mission.length }}件</span
    ><button @click="clear">全部清除</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    mission: Array,
  },
  methods: {
    clear() {
      this.$emit("clear");
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
.NoteFoot {
  width: 300px;
  height: 30px;
  background-color: white;
  margin: auto;
  border: solid 1px black;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  position: relative;
  border-top: 0;
  /* z-index: 1; */
}
.NoteFoot::before {
  content: "";
  position: absolute;
  width: 280px;
  background-color: white;
  border: solid 1px black;
  height: 30px;
  border-radius: 0 0 10px 10px;
  left: 50%;
  transform: translate(-50%, 5px);
  z-index: -1;
}
.NoteFoot::after {
  content: "";
  position: absolute;
  width: 260px;
  background-color: white;
  border: solid 1px black;
  height: 30px;
  border-radius: 0 0 10px 10px;
  left: 50%;
  transform: translate(-50%, 10px);
  z-index: -2;
}
button {
  border: 0;
  background-color: white;
  cursor: pointer;
}
button:hover {
  color: red;
}
</style>