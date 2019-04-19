<template>
    <div class="feature">
        <div class="feature-details">
            <h2 class="feature-header">{{ title }}</h2>
            <p class="feature-text">{{ text }}</p>
            <g-link :to="link" class="feature-link">Read More</g-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feature',
    props: ['title', 'text', 'link']

}
</script>

<style>
    .feature-details {
        max-width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .feature-header {
        font-size: 2rem;
        margin-bottom: 0;
        color: var(--darkgray);
    }

    .feature-text {
        margin-top: 0;
    }

   .feature-link {
        text-decoration: none;
        background: var(--white);
        border: .5px solid var(--darkgray);
        border-radius: 2px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
        color: var(--main);
        padding: 2px 10px;
        transition: background 1s;
        font-size: 1rem;
        align-self: flex-start;
    }

    .feature-link:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        .feature-link {
            align-self: flex-end;
        }
    }
</style>
