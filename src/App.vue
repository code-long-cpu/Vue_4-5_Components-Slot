<template>
  <div id="app">
    <!-- 路由页面学习 -->
    <!-- 5-2配置导航，配置路由出口，路径匹配的路由显示的位置 -->
    <div class="luyoukuang">
      <div class="luyou">
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/friend">朋友</router-link>
      </div>
      <div class="top">
        <router-view></router-view>
      </div>
    </div>

    <h3>小龙学习vue项目</h3>
    <div class="content">
      <!-- day_4 -->
      <day_4></day_4>
      <!-- day_5 -->
      <day_5></day_5>
      <!-- day_6 -->
      <!-- day_7 -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import day_4 from "./components/day_4/day_4.vue";
import day_5 from "./components/day_5/day_5.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    day_4,
    day_5,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app .content {
  display: flex;
}
h3 {
  width: 800px;
  text-align: center;
}
.luyoukuang {
  border: solid 1px black;
  margin: 0 10px;
}
.luyou {
  /* border: solid 1px black; */
  display: flex;
  justify-content: space-around;
}
.luyou a {
  height: 40px;
  flex: 1;
  border-right: solid 1px rgb(141, 141, 141);
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  background-color: rgb(37, 35, 47);
  color: white;
}
.luyou a:last-child {
  border-right: none;
}
.luyou a:hover {
  background-color: rgb(87, 85, 95);
}
.luyou a.router-link-active {
  background-color: rgb(87, 63, 184);
}
</style>
