<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-top">
                <h2 class="modal-header">Free Demo Form</h2>
                <button class="cancel-btn" type="button" @click="closeModal">Cancel</button>
            </div>
            <p class="modal-text">Currently we are offering a <strong>FREE 90 DAY TRIAL</strong> to give firms the opportunity to test, experience and decide if our tool is the right fit. Once the 90 day trial has expired the "Basic Plan" will kick in. If you decide to not continue using TRAXIT there will be no issues. If at some point you change your mind after the account has expired and would like to re-activate it, please call our team at (111) 222-3333</p>
            <Form />
        </div>
    </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
    name: 'Modal',
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
    .modal {
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

    .modal-content {
        margin: 0 auto;
        background: var(--white);
        border-radius: 5px;
        box-shadow: 2px 3px 3px 0 rgba(0,0,0,.150);
        padding: 20px;
    }

    .modal-top {
        display: flex;
        justify-content: space-between;
    }

    .modal-header {
        margin: 0;
        color: var(--main);
    }

    .modal-text {
        width: 100%;
        max-width: 530px;
        margin-top: 0;
    }

    .cancel-btn {
        background: var(--white);
        border: .5px solid var(--darkgray);
        border-radius: 2px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
        color: var(--main);
        padding: 2px 10px;
        margin-left: 35px;
        transition: background 1s;
        font-size: 1rem;
        align-self: center;
    }

    @media screen and (max-width: 950px) {
        .modal-content {
            max-width: 430px;
        }
    }

    @media screen and (max-width: 767px) {
        .modal-text {
            font-size: .8rem;
        }
    }
</style>
