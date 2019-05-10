<template>
    <div class="register-content">
        <div class="register-header">
            <span class="register-title">Free Trial | Error</span>
        </div>
        <div class="register-body">
            <div class="register-details">
                    <p class="register-details-text">Oops, something went wrong. So sorry for the inconveniance, please try again.</p>
            </div>
        </div>
        <Error class="error-svg"/>
        <div class="register-footer">
            <button type="button" class="try-btn" @click="tryAgain">Try Again</button>
        </div>
    </div>
</template>

<script>
import Error from '~/assets/svg/error.svg'
export default {
    name: 'RegistrationError',
    components: {
        Error
    },
    methods: {
        tryAgain() {
            this.$emit('restart')
        }
    },
    created() {
        window.scrollTo(0,0)
    }
}
</script>

<style>

.try-btn {
    font-size: 1.25rem;
    width: 100%;
    background: var(--main);
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.288);
    border: none;
    padding: 5px 10px;
    color: var(--white);
    cursor: pointer;
    font-weight: bold;
}

.error-svg {
    margin: 50px auto!important;
}
</style>

