<template>
  <Layout>
    <section class="hero">
      <img src="../../static/hero.png" alt="hero background image" class="hero-background">
      <div class="hero-content">
        <div class="hero-details">
          <h1 class="hero-title">Firm Practice</h1>
          <h1 class="hero-title">Management</h1>
          <button class="hero-btn">Request Demo</button>
        </div>
        <HeroImg class="hero-img" />
      </div>
    </section>
    <Mission />
    <Features />
  </Layout>
</template>

<script>
import HeroImg from '@/components/HeroImg.vue'
import Mission from '@/components/Mission.vue'
import Features from '@/components/Features.vue'
export default {
  metaInfo: {
    title: 'Practice Management'
  },
  components: {
    HeroImg,
    Mission,
    Features
  }
}
</script>

<style scoped>

.hero {
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 55px);
}

.hero-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.hero-title {
  color: var(--darkgray);
  font-size: 4rem;
  margin: 0;
  height: 60px;
}

.hero-btn {
  background: var(--white);
  border: .5px solid var(--darkgray);
  border-radius: 5px;
  box-shadow: 0 0 5px 0 var(--darkgray);
  color: var(--main);
  height: 50px;
  width: 200px;
  font-size: 1.25rem;
  margin-top: 35px;
  margin-left: 5px;
  transition: background 1s;
}

.hero-btn:hover {
  cursor: pointer;
}

.hero-img {
  position:absolute;
  right: 100px;
  top: 30%;
  height: auto;
  max-width: 1000px; 
}

@media screen and (max-width: 1730px) {
  .hero-img {
    right: 100px;
    top: 30%;
    max-width: 700px; 
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
  }

  .hero-title {
    height: 55px;
    font-size: 3.5rem;
  }

  .hero-btn {
    margin-top: 25px;
  }
}

@media screen and (max-width: 925px) {
  .hero-background {
    display: none;
  }

  .hero-img {
    display: none;
  }

  .hero-content {
    justify-content: center;
  }

  .hero-details {
    align-items: center;
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
}

</style>
