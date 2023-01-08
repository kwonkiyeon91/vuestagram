<template>
  <div class="post" v-for="(data, i) in datas" :key="i">
    <div class="user">
        <img class="user-image" :src="datas[i].userImage" />
        <p class="user-name">{{datas[i].name}}</p>
    </div>
    <div class="post-image" :class="filterName">
        <img :src="datas[i].postImage" />
    </div>
    <div class="post-content">
        <p>likes: {{datas[i].likes}}</p>
        <p><span>{{datas[i].name}}</span> {{datas[i].content}}</p>
        <p>{{datas[i].date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostView',
    props: {
      datas: Array,
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
.post-image img {
    width: 100%;
}
.post-content {
    padding: 0 10px;
}
</style>