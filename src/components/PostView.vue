<template>
  <div class="post">
    <div class="user">
        <img class="user-image" :src="data.userImage" />
        <p class="user-name">{{data.name}}</p>
    </div>
    <div class="post-image" :class="data.filter" :style="`background-image: url(${data.postImage})`">
    </div>
    <div class="post-content">
        <p @click="$store.commit('like')">likes: {{ $store.state.likes}}</p>
        <p><span>{{data.name}}</span> {{data.content}}</p>
        <p>{{data.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostView',
    props: {
      data: Object,
      filterName: String
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
    padding: 0 10px;
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
</style>