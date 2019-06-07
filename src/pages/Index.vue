<template>
  <Layout>
    <section class="hero">
      <img src="../../static/hero.png" alt="hero background image" class="hero-background">
      <div class="hero-content">
        <div class="hero-details">
          <ClientOnly>
          <vue-typer
            :text='["Practice", "Accounting", "Tax Returns", "Bookkeeping"]'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='70'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='blink'
          ></vue-typer>
          </ClientOnly>
          <h1 class="hero-title">Workflow</h1>
          <h1 class="hero-title">Management</h1>
          <g-link to="/trial" class="hero-btn" @click="showForm">Start Free Trial</g-link>
        </div>
        <HeroImg class="hero-img" />
        <g-image src="../../static/mobile_hero_illustration.png" class="mobile-hero"></g-image>
      </div>
    </section>
    <Mission />
    <Features />
    <Modal v-on:form-submitted="removeModal" v-if="showModal"  @close-modal="removeModal"/>
  </Layout>
</template>

<script>
import HeroImg from '@/components/HeroImg.vue'
import Mission from '@/components/Mission.vue'
import Features from '@/components/Features.vue'
import Modal from '@/components/Modal.vue'
import {EventBus} from '~/utils/event.js'

export default {
  metaInfo: {
    title: 'Workflow Management Software for CPAs, EAs, Bookkeepers and more',
    meta: [
        {key: 'description', title: 'Workflow Management Software', content: 'Workflow management software for CPAs, EAs, Bookkeepers, Tax Preparers and more. Learn what TRAXIT can do for you by starting a 30 day free trial with no credit card required today!'}
    ]
  },
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    HeroImg,
    Mission,
    Features,
    Modal,
    VueTyper: () => 
    import ('vue-typer')
    .then( m => m.VueTyper)
    .catch()
  },
  methods: {
    showForm() {
      EventBus.$emit('start-registration')
    },
    removeModal() {
      this.showModal = false
    }
  },
  mounted() {
    EventBus.$on('form-submitted', () => {
      this.showModal = false
    })
  }
}
</script>

<style>

.mobile-hero {
  display: none;
}

.vue-typer {
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
  height: 80px;
}

.hero {
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.hero-content {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 55px);
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

.hero-details {
  display: flex;
  position: absolute;
  left: 250px;
  top: 200px;
  flex-direction: column;
  margin-bottom: 50px;
}

.hero-title {
  color: black;
  font-size: 5rem;
  margin: 0;
  height: 80px;
}

.hero-btn {
  background: var(--white);
  border: .5px solid var(--darkgray);
  border-radius: 5px;
  box-shadow: 0 0 5px 0 var(--darkgray);
  color: var(--main);
  padding: 10px 30px;
  display: inline-block;
  font-size: 1.25rem;
  margin-top: 35px;
  margin-left: 5px;
  width: 135px;
  transition: background 1s;
  text-decoration: none;
  text-align: center;
}

.hero-btn:hover {
    margin-top: 37px;
    cursor: pointer;
    background: var(--lightgray);
    box-shadow: 0 0 10px 0 var(--main);
}

.hero-img {
  position:absolute;
  height: auto;
  max-width: 1000px;
  right: 100px;
  top: 150px; 
}

@media screen and (max-width: 1730px) {
  .hero-details {
    left: 100px;
  }

  .hero-img {
    max-width: 700px; 
    top: 200px;
  }

  .vue-typer {
      font-size: 4rem;
      font-weight: bold;
      margin: 0;
      height: 60px;
    }

  .hero-title {
    font-size: 4rem;
    height: 60px;
  }
}

@media screen and (max-width: 1400px) {
  .hero-img {
    right: 35px;
  }
}

@media screen and (max-width: 1150px) {
  .hero-img {
    max-width: 500px;
    right: 50px;
  }

  .vue-typer {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0;
    height: 55px;
  }

  .hero-title {
    height: 55px;
    font-size: 3.5rem;
  }

  .hero-btn {
    margin-top: 25px;
  }

  .hero-details {
    left: 35px;
  }
}

@media screen and (max-width: 925px) {
  .hero-content {
    flex-direction: column-reverse;
    min-height: calc(100vh - 50px);
  }

  .hero-background {
    display: none;
  }

  .hero-img {
    display: none;
  }

  .mobile-hero {
    display: block;
    width: 300px;
    height: 300px;
    position: relative;
  }

  .hero-content {
    justify-content: center;
  }

  .hero-details {
    position: static;
    align-items: center;
    margin-left: 0;
  }

  .hero-btn {
    margin-left: 0;
  }
}

@media screen and (max-width: 450px) {
  .hero-title {
    font-size: 2.5rem;
    height: 40px;
  }

  .vue-typer {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    height: 40px;
  }
}

</style>
