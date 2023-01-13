// import axios from 'axios'
import { createStore } from 'vuex'
import datas from './assets/data.js'

const store = createStore({
  state(){
    return {
        datas,
        likes: 0,
        liked: false,
        mores: {},
    }
  },
  mutations: {
    setMore(state){
        state.moreCount++
    },
    changeName(state, payload) {
        state.age += parseInt(payload)
        
    },
    like(state, payload) {
        if (state.datas[payload].liked == false) {
            state.datas[payload].likes ++
            state.datas[payload].liked = true
        } else {
            state.datas[payload].likes --
            state.datas[payload].liked = false
        }
    }
  },
  actions: {
    // getData(context) {
    //     axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=> {
    //         console.log(a.data)
    //         context.commit('setMore', a.data)
    //     })
    // }
    // moreData(context) {
    //     // post 요청시 문법, catch는 에러가 났을때
    //     // axios.post('URL', {name: 'kim'}).then().catch((err) => {
    //     //   err
    //     // })
    //     axios.get(`https://codingapple1.github.io/vue/more${context.moreCount}.json`)
    //     .then((result) => {
    //         console.log(result)
    //         context.commit('setMore', result.data)
    //         context.moreCount++
    //     })
    //   }
  }
})

export default store