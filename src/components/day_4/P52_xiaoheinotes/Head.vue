<template>
  <div class="NoteHead">
    <input type="text" placeholder="请输入任务" /><button>确认输入</button>
  </div>
</template>

<script>
export default {};
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
  /* padding: 50px; */
  margin: auto;
}
</style>