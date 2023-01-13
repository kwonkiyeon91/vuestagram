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
.post {
    margin-bottom: 20px;
}
.user {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
}
.user-name {
    font-weight: 600;
}
.user .user-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}
.post-image {
    padding: 1px;
    height: 450px;
    background-position: 50%;
    background-size: cover;
}
.post-content {
    padding: 0 10px;
}
.post-content p {
    margin: 5px 0;
}
.post-content .like-btn{
    width: 28px;
    margin-top: 10px;
}
.post-content .like-btn img{
    width: 100%;
    cursor: pointer;
}
</style>