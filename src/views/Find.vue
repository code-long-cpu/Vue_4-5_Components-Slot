<template>
  <div class="P_Find">
    <!-- <p>单词列表</p> -->
    <div class="block" v-for="(item, index) in title" :key="item.id">
      <div class="biaoti">
        <div>
          <span>{{ index + 1 }}.</span><span>{{ item.name }}</span>
        </div>
        <button class="quxiao" @click="shanchu(item.id)">X</button>
      </div>
      <div class="words_part">
        <div class="words">
          <ul>
            <li v-for="(item, index) in item.words" :key="item.id">
              <span>{{ index + 1 }}-</span>
              <span>{{ item.name }}</span>
              <span>{{ item.translate }}</span>
            </li>
          </ul>
        </div>
      </div>
      <button class="add_word" @click="add_words(index)">添加新单词</button>
    </div>
    <div class="block_add"><button @click="add">+</button></div>
  </div>
</template>

<script>
export default {
  name: "findme",
  data() {
    return {
      title: JSON.parse(localStorage.getItem("WordsLists")) || [
        {
          id: 1,
          name: "动物类",
          words: [{ id: 1, name: "dog", translate: "狗" }],
        },
        {
          id: 2,
          name: "人类",
          words: [
            { id: 1, name: "human", translate: "人类" },
            { id: 2, name: "women", translate: "女人" },
          ],
        },
      ],
      words: {},
    };
  },
  methods: {
    add() {
      const titlee = prompt("请输入分类");
      if (titlee) {
        const new_titile = {
          id: +new Date(),
          name: titlee,
          words: [],
        };
        this.title.push(new_titile);
      }
      console.log(this.title);
      localStorage.setItem("WordsLists", JSON.stringify(this.title));
    },
    add_words(id) {
      console.log(id);
      const new_words = prompt("请输入单词");
      const new_trans = prompt("请输入释义");
      if (new_words && new_trans) {
        const newwords = {
          id: +new Date(),
          name: new_words,
          translate: new_trans,
        };
        this.title[id].words.push(newwords);
      } else {
        // return;
      }
      // console.log(this.words);
      localStorage.setItem("WordsLists", JSON.stringify(this.title));
    },
    shanchu(id) {
      this.title = this.title.filter((item) => item.id !== id);
      localStorage.setItem("WordsLists", JSON.stringify(this.title));
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
.P_Find {
  /* border: solid 1px black; */
  /* padding: 20px 0; */
  /* width: 500px; */
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
p {
  text-align: center;
}
.words_part {
  /* border: solid 1px black; */
  padding: 5px 0;
}

.block,
.block_add {
  /* flex: none; */
  display: inline-block;
  width: 200px;
  height: 150px;
  border: solid 2px black;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 3px 10px 0.6px rgba(193, 193, 193, 0.8);
}
.block {
  /* border: solid 1px black; */
  /* padding: 5px; */
  position: relative;
  overflow: hidden;
}
.biaoti {
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 183, 80);
}
.biaoti span {
  font-weight: 400;
}
.words {
  padding: 0 5px;
}
.words ul {
  list-style: none;
}
.words ul li {
  border-bottom: solid 1px rgb(156, 156, 156);
}
.words ul li:hover {
  cursor: pointer;
  background-color: rgb(255, 248, 238);
}
.block_add {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block_add button {
  width: 100%;
  height: 100%;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  color: white;
  font-size: 150px;
  line-height: 50px;
  background-color: rgb(255, 183, 80);
}
.block_add button:hover {
  background-color: rgb(255, 220, 170);
}
.add_word {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0px;
  cursor: pointer;
  /* border-radius: 0 0 0px 0px; */
  border: 0;
  color: white;
  background-color: rgba(35, 34, 45, 1);
  font-weight: 200;
}
.add_word:hover {
  background-color: rgb(125, 125, 126);
}
.quxiao {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>