<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0 || step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h1>안녕{{ age }}</h1>
  <button @click="changeName(10)">변경</button>
  <p>{{ mores }}</p>
  <button @click="getData()">더보기</button>

  <ConView :datas="datas" :step="step" :url="url" @write="myContent = $event" :filterName="filterName"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import ConView from './components/ConView.vue';
import datas from './assets/data.js'
import axios from 'axios'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    ConView
  },
  data() {
    return {
        datas,
        moreCount: 0,
        step: 0,
        url: '',
        myContent: '',
        filterName: ''
    }
  },
  mounted() {
    this.emitter.on('filterName', (a)=>{
      this.filterName = a;
      console.log(a)
    });
  },
  computed: {
    ...mapState(['name', 'age', 'likes', 'mores'])
  },
  methods: {
    ...mapMutations(['setMore', 'changeName', 'like']),
    ...mapActions(['getData']),
    more() {
      // post 요청시 문법, catch는 에러가 났을때
      // axios.post('URL', {name: 'kim'}).then().catch((err) => {
      //   err
      // })
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
      .then((result) => {
        this.datas.push(result.data)
        this.moreCount++
      })
    },
    upload(e) {
      let file = e.target.files;
      let imageUrl = URL.createObjectURL(file[0]);
      // console.log(imageUrl);
      this.url = imageUrl;
      this.step++;
    },
    publish() {
      let myPost = {
        name: "Ki yeon",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.myContent,
        filter: this.filterName
      };
      this.datas.unshift(myPost)
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.tab {
  display: none;
}
</style>
