<template>
    <section class="contact">
        <div class="contact-content">
            <h2 class="contact-header">Contact</h2>
            <div class="contact-body">
                <div class="contact-details">
                    <h2 class="contact-details-header">Would you like a demo?</h2>
                    <p>Feel free to fill out the form on the right and we will send you a FREE on-demand webinar! If you feel like you are ready to start your free trial now <g-link to="/trial" class="contact-trial-btn">Click Here</g-link></p>
                     <g-image src="../../static/img/Arrow.png" width="250" class="arrow"></g-image>
                </div>
                <Form />
            </div>
        </div>
    </section>
</template>

<script>
import Form from '@/components/Form.vue'
import {EventBus} from '~/utils/event.js'
export default {
    name: 'Contact',
    components: {
        Form
    },
    methods: {
        showForm() {
            EventBus.$emit('start-registration')
        }
    }
}
</script>

<style>
    .contact {
        width: 100%;
        position: relative;
        margin-bottom: 50px;
        background: var(--white);
    }

    .contact-content {
        max-width: 1120px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-header {
        font-size: 3rem;
        color: var(--main);
    }

    .contact-body {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .contact-details {
        max-width: 400px;
        position: relative;
    }

    .contact-details-header {
        color: var(--darkgray);
        font-size: 1.75rem;
    }

    .contact-details p {
        margin-top: 0;
    }

    .arrow {
        position: absolute;
        left: 150px;
        bottom: 10px;
    }

    .contact-trial-btn {
        text-decoration: none;
        color: var(--main);
    }

    
  @media screen and (max-width: 950px) {
      .contact-details {
          width: 300px;
      }

      .arrow {
          left: 50px;
          bottom: 25px;
      }
  }

  @media screen and (max-width: 767px) {
      .contact-details p {
          display: none;
      }

      .arrow {
          display: none;
      }

      .contact-details {
          width: 400px;
      }

      .contact-body {
          flex-direction: column;
          align-items: center;
      }
  }

   @media screen and (max-width: 458px) {
    .contact-header {
        margin: 10px;
    }

    .contact-details {
        width: 90%;
        text-align: center;
    }

    .contact-details-header {
        color: var(--darkgray);
        font-size: 1.25rem;
        align-self: center;
    }

  }
</style>
