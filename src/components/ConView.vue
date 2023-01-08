<template>
  <div>
    <div v-if="step == 0">
      <PostView :datas="datas" :filterName="filterName"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div :class="filterName" class="upload-image" :style="`background-image:url(${url})`"></div>
      <div class="filters">
        <FilterBoxView v-for="filter in filters" :key="filter" :url="url" :filters="filters" :filter="filter">
          <span>{{filter}}</span>
        </FilterBoxView>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div :class="filterName" class="upload-image" :style="`background-image:url(${url})`"></div>
      <div class="write">
        <textarea class="write-box" placeholder="write!" @input="$emit('write', $event.target.value)"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "./PostView.vue";
import FilterBoxView from "./FilterBoxView.vue";

export default {
  name: "ConView",
  components: { PostView, FilterBoxView },
  data() {
    return {
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      filterName: ''
    }
  },
  mounted() {
    this.emitter.on('filterName', (a)=>{
      this.filterName = a;
      console.log(a)
    });
  },
  props: {
    datas: Array,
    step: Number,
    url: String,
    myContent: String
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  display: flex;
  overflow-x: scroll;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>