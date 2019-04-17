<template>
    <Layout>
        <Mission class="mission-component" />
    </Layout>
</template>

<script>
import Mission from '@/components/Mission.vue'

export default {
    name: 'About',
    components: {
        Mission
    }
}
</script>

<style scoped>
.mission-component {
    position: relative;
    z-index: -1000;
}
</style>


