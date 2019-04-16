<template>
    <div class="feature">
        <div class="feature-details">
            <h2 class="feature-header">{{ title }}</h2>
            <p class="feature-text">{{ text }}</p>
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
    .feature-details {
        max-width: 400px;
    }

    .feature-header {
        font-size: 2rem;
        margin-bottom: 0;
        color: var(--darkgray);
    }

    .feature-text {
        margin-top: 0;
    }
</style>
