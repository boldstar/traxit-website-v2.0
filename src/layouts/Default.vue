<template>
  <div class="layout">
    <Navbar id="navbar"/>
    <div class="layout-container">
      <transition name="fade" appear>
        <main>
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
import Footer from '@/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
    Contact,
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

.layout {
  overflow: hidden;
}

.layout-container {
  position: relative;
  width: 100vw;
}

.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-enter {
  opacity: 0;
}

</style>
