<template>
  <div id="app">
    <!-- 路由页面学习 -->
    <!-- 5-2配置导航，配置路由出口，路径匹配的路由显示的位置 -->
    <div class="luyoukuang">
      <div class="luyou">
        <router-link to="/find">单词列表</router-link>
        <router-link to="/my">美剧收藏</router-link>
        <router-link to="/friend">我的数据</router-link>
      </div>
      <div class="top">
        <!-- <keep-alive :include="findmeEnglind"> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
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
  data() {
    return {
      findmeEnglind: ["findme"],
    };
  },
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
  border: solid 5px rgb(37, 35, 47);
  margin: 0 10px;
  border-radius: 20px;
  padding: 10px;
}
.luyou {
  /* border: solid 1px black; */
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  background-color: rgb(37, 35, 47);
}
.luyou a {
  height: 40px;
  flex: 1;
  /* border-right: solid 1px rgb(141, 141, 141); */
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  background-color: rgb(37, 35, 47);
  color: white;
  border-radius: 20px;
  font-weight: 200;
}

.luyou a:hover {
  background-color: rgb(87, 85, 95);
}
.luyou a.router-link-active {
  background-color: rgb(125, 125, 126);
}
.top {
  height: 500px;
  overflow: scroll;
}
</style>
