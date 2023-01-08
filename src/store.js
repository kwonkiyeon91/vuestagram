import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'Kim',
      age: 32,
      likes: 0,
      liked: false,
      mores: {}
    }
  },
  mutations: {
    setMore(state, data){
        state.mores = data
    },
    changeName(state, payload) {
        state.age += parseInt(payload)
        
    },
    like(state) {
        if (state.liked == false) {
            state.likes++
            state.liked = true
        } else {
            state.likes--
            state.liked = false
        }
    }
  },
  actions: {
    getData(context) {
        axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=> {
            console.log(a.data)
            context.commit('setMore', a.data)
        })
    }
  }
})

export default store