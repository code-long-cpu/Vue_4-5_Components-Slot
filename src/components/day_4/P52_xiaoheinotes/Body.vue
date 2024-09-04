<template>
  <div class="NoteBody">
    <ul>
      <li><span>1.跑步</span> <a href="">删除</a></li>
      <li><span>2.睡觉</span> <a href="">删除</a></li>
      <li><span>2.睡觉</span> <a href="">删除</a></li>
      <li><span>2.睡觉</span> <a href="">删除</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.NoteBody {
  width: 300px;
  /* height: 50px; */
  border: solid 1px black;
  background-color: white;
  margin: auto;
}
.NoteBody ul li {
  list-style: none;
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
}
.NoteBody ul li:last-child {
  border-bottom: none;
}
.NoteBody ul li:hover {
  background-color: rgb(244, 244, 244);
}
.NoteBody ul li a {
  text-decoration: none;
  color: rgb(187, 187, 187);
}
.NoteBody ul li a:hover {
  color: rgb(75, 87, 87);
}
</style>