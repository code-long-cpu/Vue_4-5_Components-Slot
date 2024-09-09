<template>
  <div class="select">
    <select name="" id="xuanxiang" :value="value" @change="changeCity">
      <option value="西雅图">西雅图</option>
      <option value="洛杉矶">洛杉矶</option>
      <option value="旧金山">旧金山</option>
      <option value="华盛顿">华盛顿</option>
      <option value="圣何塞">圣何塞</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    changeCity(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
#xuanxiang {
  width: 70px;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
}
#xuanxiang option {
  font-size: 50px;
}
</style>