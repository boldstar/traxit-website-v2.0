<template>
    <section class="contact">
        <div class="contact-content">
            <h2 class="contact-header">Contact</h2>
            <div class="contact-body">
                <div class="contact-details">
                    <h2 class="contact-details-header">Request Your Free Demo Today!</h2>
                    <p>To start using TRAXIT simply fill out the form to the right and we will be in contact as soon as possible. To ensure you understand our product we would like to give you a full demonstration and a 90 day free trial. This should give you the time to determine if we are the right fit for you and your team!</p>
                </div>
                <Form />
            </div>
        </div>
    </section>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
    name: 'Contact',
    components: {
        Form
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
    }

    .contact-details-header {
        color: var(--darkgray);
        font-size: 1.75rem;
    }

    .contact-details p {
        margin-top: 0;
    }

    
  @media screen and (max-width: 950px) {
      .contact-details {
          width: 300px;
      }
  }

  @media screen and (max-width: 767px) {
      .contact-details p {
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
