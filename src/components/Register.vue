<template>
    <div class="register">
        <StepOne :data="business" :errors="errorArray" @step-one-complete="validateStepOne" @change="clearErrors" v-if="!stepOneDone && !stepThreeDone" />
        <StepTwo :data="user" :errors="errorArray"  @next-step="validateStepTwo" @change="clearErrors" @go-back="stepOneDone = false" v-if="stepOneDone && !stepTwoDone"/>
        <StepThree :data="user" v-if="stepTwoDone && !stepThreeDone" @complete="submitRegistration" @go-back="stepTwoDone = false" />
        <Processing v-if="processRequest" />
        <RegistrationError v-if="error" @restart="restartRegistration" />
    </div>
</template>

<script>
const axios = require('axios')
import {validateEmail} from '~/utils/validate.js'
import StepOne from '@/components/StepOne.vue'
import StepTwo from '@/components/StepTwo.vue'
import StepThree from '@/components/StepThree.vue'
import Processing from '@/components/Processing.vue'
import RegistrationError from '@/components/RegistrationError.vue'
export default {
    name: 'Register',
    data() {
        return {
            business: {
                business_name: '',
                business_email: '',
                business_number: '',
            },
            user: {
                user_name: '',
                user_email: '',
                password: '',
                confirm_password: ''
            },
            errorArray: [],
            stepOneDone: false,
            stepTwoDone: false,
            stepThreeDone: false,
            processRequest: false,
            error: null
        }
    },
    components: {
        StepOne,
        StepTwo,
        StepThree,
        Processing,
        RegistrationError
    },
    methods: {
        validateStepOne() {
            for( var key in this.business) {
                if(this.business[key] == '') {
                    this.errorArray.push(key)
                    return
                } else if(!validateEmail(this.business.business_email)) {
                    this.errorArray.push('business_email')
                    return
                }
            } 
            this.stepTwo()
        },
        stepTwo() {
            this.errorArray = []
            this.stepOneDone = true
        },
        validateStepTwo() {
            for( var key in this.user) {
                if(this.user[key] == '') {
                    this.errorArray.push(key)
                    return
                } else if(!validateEmail(this.user.user_email)) {
                    this.errorArray.push('user_email')
                    return
                }
            } this.validatePassword()
        },
        validatePassword() {
            this.errorArray = []
            if(this.user.password != this.user.confirm_password) {
                this.errorArray = ['password', 'confirm_password']
                return
            } this.stepThree()
        },
        stepThree() {
            this.stepTwoDone = true
        },
        submitRegistration() {
            this.stepOneDone = true
            this.stepTwoDone = true
            this.stepThreeDone = true
            this.processRequest = true
            const fqdn = this.business.business_name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g,'' ).replace(/^\s/,'').replace(/\s$/,'').toLowerCase()
            axios.post('http://traxit.test/api/free-trial-register', {
                company: this.business.business_name,
                company_email: this.business.business_email,
                company_number: this.business.business,
                name: this.user.user_name,
                email: this.user.user_email,
                fqdn: fqdn,
                password: this.user.password,
                password_confirmation: this.user.confirm_password
            }).then(response => {
                console.log(response.data)
                this.complete()
            }).catch(error => {
                console.log(error.response.data)
                this.errorHappened(error.response.data)
            })
        },
        complete() {
            this.processRequest = false
            // window.location.replace('https://app.traxit.io')
        },
        errorHappened() {
            this.processRequest = false
            this.error = true
        },
        clearErrors() {
            this.errorArray = []
        },
        restartRegistration() {
            this.stepOneDone = false
            this.stepTwoDone = false
            this.stepThreeDone = false
            this.processRequest = false
            this.error = false
            this.errorArray = []
        }
    },
    created() {
        window.scrollTo(0,0)
    }
}
</script>

<style>

.register {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.178);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 1s;
}

.register-content {
    margin: 0 auto;
    width: 600px;
    background: white;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
    border-radius: 5px;
    transition: all 1s;
    height: 530px;
    display: flex;
    flex-direction: column;
}

.register-header {
    padding: 5px 10px;
    border-bottom: 1px solid black;
    background: var(lightgray);
}

.register-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--main);
}

.register-form {
    margin-right: 0!important;
    padding: 0 15px;
}

input.register-input {
    width: 100%;
    max-width: 550px;
}

.register-details {
    padding: 0 25px;
}

.register-details-text {
    background: var(--lightgray);
    font-size: .9rem;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
}

.register-footer {
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: auto;
}

.register-btn {
    font-size: 1.25rem;
    background: var(--main);
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.288);
    border: none;
    padding: 5px 10px;
    color: var(--white);
    cursor: pointer;
    font-weight: bold;
}

.cancel {
    background: var(--darkgray);
}

.error-content {
    margin: 0 auto;
    width: 600px;
    background: white;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
    border-radius: 5px;
    transition: all 1s;
    height: 500px;
    display: flex;
    flex-direction: column;
}

 @media screen and (max-width: 950px) {
        .register-content {
            max-width: 400px;
            height: 550px;
            width: 90%;
        }

        input.register-input {
            width: 95%;
            max-width: 350px;
        }

  }

  @media screen and (max-width: 450px) {
      .register-btn {
        font-size: 1.0rem;
    }

     .register-content {
            max-width: 400px;
            height: 600px;
            width: 90%;
            overflow: hidden;
    }
  }
</style>
