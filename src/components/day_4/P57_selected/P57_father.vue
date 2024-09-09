<template>
  <div class="P_57_father">
    <p>
      父组件标题：<span>{{ city }}</span>
    </p>
    <div class="P-57_son">
      <p>子组件选项：<selected v-model="city"></selected></p>
    </div>
  </div>
</template>

<script>
import selected from "./selected.vue";

export default {
  data() {
    return {
      city: "西雅图",
    };
  },
  components: {
    selected,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.P_57_father {
  width: 200px;
  padding: 5px;

  /* border: solid 1px black; */
  box-shadow: 0 0 5px 2px rgb(171, 171, 171, 0.7);
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.P_57_father p {
  display: flex;
  align-items: center;
}
.P_57_father p span {
  color: red;
  font-weight: 500;
}
.P-57_son {
  /* border: solid 1px black; */
  box-shadow: 0 0 5px 2px rgb(171, 171, 171, 0.7);
  border-radius: 10px;
  margin: 5px auto;
  padding: 5px;
}
</style>