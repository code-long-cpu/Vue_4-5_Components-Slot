<template>
  <div class="NoteHead">
    <input
      v-model="newtodo"
      @keyup.enter="add"
      type="text"
      placeholder="请输入任务"
    /><button @click="add">确认输入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newtodo: "",
    };
  },
  methods: {
    add() {
      if (this.newtodo === "") {
        alert("请输入任务");
        return;
      }
      // console.log(this.newtodo);
      this.$emit("add", this.newtodo);
      this.newtodo = "";
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
.NoteHead {
  width: 300px;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 5px;
  background-color: white;
  border-radius: 5px 5px 0 0;
  border-bottom: 0;
}
input {
  width: 150px;
}
button {
  width: 100px;
  cursor: pointer;
}
</style>