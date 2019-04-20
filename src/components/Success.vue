<template>
    <div class="success-modal" @click="closeModal">
        <div class="success-modal-content">
            <div class="success-modal-top">
                <h2 class="success-modal-header">Thank You!</h2>
            </div>
            <p class="success-modal-text">Thank you for your interest in TRAXIT. We will be intouch soon and are looking forward to helping you and your team.</p>
            <button class="success-cancel-btn" type="button" @click="closeModal">Close Me</button>
        </div>
    </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
    name: 'success-modal',
    components: {
        Form
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }
}
</script>

<style>
    .success-modal {
        position: absolute;
        top: 0;
        z-index: 999;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.26);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .success-modal-content {
        margin: 0 auto;
        background: var(--white);
        border-radius: 5px;
        box-shadow: 2px 3px 3px 0 rgba(0,0,0,.150);
        padding: 20px;
    }

    .success-modal-top {
        display: flex;
        justify-content: space-between;
    }

    .success-modal-header {
        margin: 0;
        color: var(--main);
    }

    .success-modal-text {
        width: 100%;
        max-width: 530px;
        margin-top: 0;
    }

    .success-cancel-btn {
        background: var(--white);
        border: .5px solid var(--darkgray);
        border-radius: 2px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
        color: var(--main);
        padding: 2px 10px;
        margin-left: 0;
        transition: background 1s;
        font-size: 1rem;
        align-self: center;
    }

    @media screen and (max-width: 950px) {
        .success-modal-content {
            width: 300px;
        }
    }

    @media screen and (max-width: 767px) {
        .success-modal-text {
            font-size: .8rem;
        }

        .success-modal-content {
            max-width: 90%;
        }
    }
</style>
