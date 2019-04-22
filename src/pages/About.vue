<template>
    <Layout>
        <Mission class="mission-component" />
        <Team />
        <Why />
    </Layout>
</template>

<script>
import Mission from '@/components/Mission.vue'
import Team from '@/components/Team.vue'
import Why from '@/components/Why.vue'

export default {
    name: 'About',
    components: {
        Mission,
        Team,
        Why
    }
}
</script>

<style scoped>
.mission-component {
    position: relative;
    z-index: -1000;
}
</style>


