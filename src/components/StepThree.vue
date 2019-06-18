<template>
    <div class="register-content">
        <div class="register-header">
            <span class="register-title">Free Trial</span>
        </div>
        <Workflow class="svg-register" />
        <div class="verify-body">
            <h2>Verify Credentials</h2>
            <ul class="credentials">
                <li>Name: {{user.user_name}}</li>
                <li>Email: {{user.user_email}}</li>
                <li>Password: {{user.password}}</li>
            </ul>
            <small>By creating a free trial you agree to our</small>
            <a class="terms-link" @click="openTerms">terms of service</a>
        </div>
        <div class="register-footer">
            <button type="button" class="register-btn cancel" @click="goBack">Go Back</button>
            <button type="button" class="register-btn" @click="completeRegistration">Start Free Trial</button>
        </div>
    </div>
</template>

<script>
import {EventBus} from '~/utils/event.js'
import Workflow from '~/assets/svg/workflow.svg'
export default {
    name: 'StepThree',
    props: ['data', 'errors'],
    data() {
        return {
            user: {}
        }
    },
    components: {
        Workflow
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
        completeRegistration() {
            this.$emit('complete')
        },
        openTerms() {
            window.open('https://traxit.io/terms', '_blank')
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

    .verify-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .credentials {
        list-style: none;
        padding: 0;
        margin: 0;
        background: var(--lightgray);
        width: 300px;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.200)
    }

    .svg-register {
            max-width: 350px;
            height: 200px;
            margin: 10px auto;
    }

    .terms-link {
        font-size: .8rem;
        text-decoration: none;
        color: #0077ff;
        cursor: pointer;
    }
</style>
