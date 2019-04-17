<template>
  <div class="feature-layout">
    <div class="feature-layout-background"></div>
    <Navbar id="navbar"/>
    <div class="feature-layout-container">
      <Sidebar />
      <transition name="fade" appear>
        <main class="features-main">
          <slot/>
        </main>
      </transition>
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar.vue'
import Contact from '@/components/Contact.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
    Contact,
    Sidebar,
    Footer
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Heebo');

:root {
  --main: #0077ff;
  --lightgray: #F3F3F3;
  --white: #ffffff;
  --darkgray: #4A4A4A;
}

body {
  font-family: 'Heebo', -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.feature-layout-background {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--lightgray);
  height: 50vh;
  width: 100%;
  z-index: -1;
}

.features-main {
  background-color: var(--white)!important;
  box-shadow: 0 1px 10px rgba(0,0,0,250);
  margin-top: 20px;
  position: relative;
  z-index: 1;
  border-radius: 5px;
  min-height: calc(100vh - 300px);
  max-height: 100vh;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}

.features-main::-webkit-scrollbar {
  width: 0!important;
}

.feature-layout {
  overflow: hidden;
}

.feature-layout-container {
  position: relative;
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
}

.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-enter {
  opacity: 0;
}

</style>
