<template>
    <div class="feature">
        <div class="feature-details">
            <h2 class="feature-header">{{ title }}</h2>
            <p class="feature-text">{{ text }}</p>
        </div>
        <div class="feature-svg">
            <div v-html="svg"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feature',
    props: ['title', 'text', 'svg']

}
</script>

<style>
    
</style>
