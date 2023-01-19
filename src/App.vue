<template>
    <div>
        <div class="header">
            <ul class="header-button-left">
                <li v-if="step == 2 || step == 1" @click="step--">Cancel</li>
                <li v-if="step == 0">&lt;</li>
            </ul>
            <ul class="header-button-right">
                <li class="write" v-if="step == 0" >            
                    <input @change="upload" type="file" id="file" class="inputfile" />
                    <label for="file" class="input-plus">+</label>
                </li>
                <li class="add" v-if="step == 1" @click="step++">다음</li>
                <li class="add" v-if="step == 2" @click="publish">발행</li>
            </ul>
            <img src="./assets/logo.png" class="logo" />
        </div>

        <ConView :datas="$store.state.datas" :step="step" :url="url" @write="myContent = $event" :filterName="filterName"/>

        <div class="more" v-if="step == 0">
            <button @click="more()">더 보기</button>
        </div>
        <!--
        <div class="footer">
            <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
            </ul>
        </div> -->
    </div>
</template>

<script>
import ConView from './components/ConView.vue';
import axios from 'axios'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    ConView
  },
  data() {
    return {
        step: 0,
        url: '',
        myContent: '',
        moreCount: 0,
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
    ...mapState(['datas', 'moreCount', 'likes', 'mores', 'filterName'])
  },
  methods: {
    ...mapMutations(['setMore', 'changeName', 'like']),
    ...mapActions(['moreData']),
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
</style>
