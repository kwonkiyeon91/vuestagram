<template>
  <div class="post">
    <div class="user">
        <img class="user-image" :src="data.userImage" />
        <p class="user-name">{{data.name}}</p>
    </div>
    <div class="post-image" :class="data.filter" :style="`background-image: url(${data.postImage})`">
    </div>
    <div class="post-content">
        <div class="like-btn" v-if="$store.state.datas[i].liked == false" @click="$store.commit('like', i)">
            <img src="../assets/like.png" alt="좋아요"/>
        </div>
        <div class="like-btn" v-if="$store.state.datas[i].liked == true" @click="$store.commit('like', i)">
            <img src="../assets/liked.png" alt="좋아요"/>
        </div>
        <p>좋아요 {{ $store.state.datas[i].likes}}</p>
        <p><span class="user-name">{{data.name}}</span> {{data.content}}</p>
        <p>{{data.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostView',
    props: {
      data: Object,
      filterName: String,
      i: Number
    }
}
</script>

<style>

</style>