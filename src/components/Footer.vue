<template>
    <footer>
        <div class="footer-contents">
            <span class="copy">&copy; 2019 TRAXIT | All Rights Reserved</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    footer {
        height: 70px;
        background: var(--lightgray);
        padding: 10px;
        width: 100%;
        position: relative;
    }

    .footer-contents {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        height: 100%;
    }

    .copy {
        align-self: center;
        font-size: 1.2rem;
        margin-left: 35px;
    }
</style>
