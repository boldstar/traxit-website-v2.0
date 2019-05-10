<template>
    <div class="register-content">
        <div class="register-header">
            <span class="register-title">Free Trial | Step 1</span>
        </div>
        <div class="register-body">
            <div class="register-details">
                <p class="register-details-text">Currently we are offering a <strong>FREE 30 DAY TRIAL</strong> with no credit card up front to give firms the opportunity to test, experience and decide if our tool is the right fit. At the end of <strong>30 DAYS</strong> you will be sent an invoice requesting to provide credit card information. If at some point you change your mind after the account has expired and would like to re-activate it, please call our team at (936) 213-0639.</p>
            </div>
            <form class="register-form">
                <label for="Business Name">Business Name</label>
                <input type="text" class="register-input" :class="{'input-error': errors.length >= 1 && business.business_name == ''}" placeholder="Business Name" v-model="business.business_name" @input="handleInput" @change="handleChange">
                <label for="Business Name">Business Email <small class="text-error" v-if="errors.length >= 1 && errors.includes('business_email') || errors.length >= 1 && business.business_email == ''" >Invalid format</small></label>
                <input type="email" class="register-input" :class="{'input-error': errors.length >= 1 && errors.includes('business_email') || errors.length >= 1 && business.business_email == ''}" placeholder="Business Email" v-model="business.business_email" @input="handleInput" @change="handleChange">
                <label for="Business Name">Business Phone Number</label>
                <input type="text" class="register-input" :class="{'input-error': errors.length >= 1 && business.business_number == ''}" placeholder="Business Phone Number" v-model="business.business_number" @input="handleInput" @change="handleChange">
            </form>
        </div>
        <div class="register-footer">
            <button type="button" class="register-btn cancel" @click="closeRegistration">Cancel</button>
            <button type="button" class="register-btn" @click="nextStep">Next</button>
        </div>
    </div>
</template>

<script>
import {EventBus} from '~/utils/event.js'
export default {
    name: 'StepOne',
    props: ['data', 'errors'],
    data() {
        return {
            business: {}
        }
    },
    methods: {
        handleChange () {
           this.$emit('change')
        },
        handleInput () {
            return this.$emit('input', this.business)
        },
         setCurrentValue (business) {
            this.business = business
        },
        closeRegistration() {
            EventBus.$emit('close-registration')
        },
        nextStep() {
            this.$emit('step-one-complete')
        }
    },
    watch: {
        value (val) {
            if (!val) return
            this.setCurrentValue(val)
        },
    },
    mounted() {
        this.business = this.data
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
