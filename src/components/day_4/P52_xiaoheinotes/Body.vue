<template>
  <div class="NoteBody">
    <ul>
      <li v-for="(item, index) in mission" :key="item.id">
        <span>{{ index + 1 }}.{{ item.name }}</span>
        <a href="" @click.prevent="delet(item.id)">删除</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    mission: Array,
  },
  methods: {
    delet(id) {
      // console.log(id);
      this.$emit("delet", id);
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
.NoteBodnewtodo:hover {
  color: rgb(75, 87, 87);
}
</style>