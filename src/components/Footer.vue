<template>
    <footer>
        <div class="footer-contents">
            <span class="copy">&copy; 2019 TRAXIT | All Rights Reserved</span>
            <span class="copy">(936) 213-0639</span>
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
        justify-content: space-between;
        height: 100%;
    }

    .copy {
        align-self: center;
        font-size: 1.2rem;
        margin-left: 35px;
    }

    @media screen and (max-width: 1140px) {
        .footer-contents {
            padding: 0 35px;
        }
    }

    @media screen and (max-width: 767px) {
       .copy {
           font-size: .8rem;
       }

       .footer-contents {
           flex-direction: column;
           justify-content: center;
           align-items: flex-start;
       }
    }
</style>
