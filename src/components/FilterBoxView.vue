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
</style>