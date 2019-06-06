<template>
    <div class="register-content">
        <div class="register-header">
            <span class="register-title">Free Trial</span>
        </div>
        <div class="register-body">
            <div class="register-details">
                <p class="register-details-text">Create your user credentials, at login you will use your email and password that you provide here. If you forget just click the "forgot password" button at the bottom of the login form and a reset password link will be emailed to the email provided on this form.</p>
            </div>
            <form class="register-form">
                <label for="Name">Name</label>
                <input type="text" class="register-input" :class="{'input-error': errors.length >= 1 && user.user_name == ''}" v-model="user.user_name" placeholder="Name" @input="handleInput" @change="handleChange" ref="input">

                <label for="Email">Email <small class="text-error" v-if="errors.length >= 1 && errors.includes('user_email') || errors.length >= 1 && user.user_email == ''" >Invalid format</small> </label>
                <input type="email" class="register-input" :class="{'input-error': errors.length >= 1 && errors.includes('user_email') || errors.length >= 1 && user.user_email == ''}" v-model="user.user_email"  placeholder="Email" @input="handleInput" @change="handleChange">

                <label for="Business Name">Password: <small> Min Length: 10 | Ex format: Trax1t234$</small> <small class="text-error" v-if="errors.length >= 1 && user.password == '' || errors.length >= 1 && errors.includes('password_format')" > Invalid format</small></label>
                <input type="text" class="register-input" :class="{'input-error': errors.length >= 1 && errors.includes('password') || errors.length >= 1 && user.password == '' || errors.length >= 1 && errors.includes('password_format')}" v-model="user.password"  placeholder="Password" @input="handleInput" @change="handleChange">

                <label for="Confirm Password">Confirm Password <small class="text-error" v-if="errors.length >= 1 && errors.includes('password') || errors.length >= 1 && user.password == ''" >Password does not match</small> </label>
                <input type="text" class="register-input" :class="{'input-error': errors.length >= 1 && errors.includes('confirm_password') || errors.length >= 1 && user.confirm_password == ''}" v-model="user.confirm_password"  placeholder="Confirm Password" @input="handleInput" @change="handleChange">
            </form>
        </div>
        <div class="register-footer">
            <button type="button" class="register-btn cancel" @click="goBack">Go Back</button>
            <button type="button" class="register-btn" @click="nextStep">Next</button>
        </div>
    </div>
</template>

<script>
import {EventBus} from '~/utils/event.js'
export default {
    name: 'StepTwo',
    props: ['data', 'errors'],
    data() {
        return {
            user: {}
        }
    },
    methods: {
        handleChange () {
           this.$emit('change')
        },
        handleInput () {
            return this.$emit('input', this.user)
        },
         setCurrentValue (user) {
            this.user = user
        },
        goBack() {
            this.$emit('go-back')
        },
        nextStep() {
            this.$emit('next-step')
        }
    },
    watch: {
        value (val) {
            if (!val) return
            this.setCurrentValue(val)
        },
    },
    mounted() {
        this.user = this.data
        setTimeout(() => {
                this.$refs.input.focus()
        }, 500)
    }
}
</script>

<style>
    .input-error {
        bottom: 1px solid red;
    }

    .text-error {
        color: red;
    }
</style>
