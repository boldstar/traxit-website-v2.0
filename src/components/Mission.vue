<template>
    <section class="mission">
        <Rocket class="rocket" />
        <div class="mission-content">
            <h2 class="mission-header">Our Mission</h2>
            <div class="mission-statement">
                <div>
                    <dot class="dot"></dot>
                </div>
                <p class="mission-text">Workflow management for small businesses such as CPAs, EAs, Bookkeepers, Tax preparers and more is critical for organized success. Our mission is to provide easy to use software for managing the backend of your firm while providing transparency and awareness for you and your customers.</p>
            </div>
            <div class="mission-statement">
                <div>
                    <dot class="dot"></dot>
                </div>
                <p class="mission-text">With TRAXIT you can count on always being aware of what is actually happening with our easy to use, intuitive dashboard along with workflow overviews of all engagements and who is currently assigned to them.</p>
            </div>
            <div class="mission-statement">
                <div>
                    <dot class="dot"></dot>
                </div>
                <p class="mission-text">TRAXIT, built by individuals who have experience in the industry understand that finding a tool that will meet the needs of your firm can be difficult and we hope that our solution will resolve this issue.</p>
            </div>
        </div>
    </section>
</template>

<script>
import Dot from '@/components/Dot.vue'
import Rocket from '@/components/Rocket.vue'
export default {
    name: 'Mission',
    components: {
        Dot,
        Rocket
    }
}
</script>

<style>
    .rocket {
        position: absolute;
        right: 0;
        top: 200px;
        height: auto;
        max-width: 800px;
        z-index: 0;
    }

    .mission {
        width: 100%;
        position: relative;
        padding: 50px 20px;
        max-width: 1120px;
        margin: 0 auto;
        background: transparent;
    }

    .mission-content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 0;
    }

    .mission-header {
        font-size: 3rem;
        margin: 10px auto;
        color: var(--main);
    }

    .mission-statement {
        display: flex;
        margin-bottom: 30px;
        text-overflow: wrap;
    }

    .mission-text {
        margin-top: 0;
        font-size: 1.25rem;
        margin-left: 10px;
    }

    .dot {
        width: 20px;
        height: auto;
        margin-top: 5px;
    }

    @media screen and (max-width: 1160px) {
        .mission {
            padding: 0;
        }

        .mission-statement {
            padding: 0 20px;
        }
    }

    @media screen and (max-width: 767px) {
        .mission-text {
            font-size: 1rem;
        }

        .mission-header {
            font-size: 2rem;
        }
    }
</style>
