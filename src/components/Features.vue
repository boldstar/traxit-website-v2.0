<template>
    <section class="features">
        <div class="features-content">
            <h2 class="features-header">Features</h2>
            <Feature :title="'Dashboard'" :text="'Giving a visual representation of the data you have flowing through your firm or business is great for quick decision making and a high level overview of what is happening'" />
        </div>
    </section>
</template>

<script>
import Feature from '@/components/Feature.vue'

export default {
    name: 'Features',
    components: {
        Feature,
      
    },

}
</script>

<style>
    .features {
        background-color: var(--lightgray);
        width: 100%;
        position: absolute;
        left: 0;
    }

    .features-content {
        display: flex;
        flex-direction: column;
        max-width: 1120px;
        margin: 0 auto;
    }

    .features-header {
        font-size: 3rem;
        color: var(--main);
        margin: 10px auto;
    }
</style>
