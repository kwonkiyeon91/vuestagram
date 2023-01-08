<template>
    <div class="filter-wrap">
        <div @click="fire" class="filter-item" :class="filter" :style="`background-image: url(${url})`">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterBoxView',
    methods: {
        fire() {
            this.emitter.emit('filterName', this.filter)
        }
    },
    props: {
        url: String,
        filter: String
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : #000;
  background-size: cover;
  background-position : center;
}
.filter-name {
    text-align: center;
}
</style>