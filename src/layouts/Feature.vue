<template>
  <div class="feature-layout">
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
export default {
  name: 'Default',
  components: {
    Navbar,
    Contact,
    Sidebar
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

.features-main {
  background-color: var(--white);
  box-shadow: 0 1px 10px rgba(0,0,0,250);
  margin-top: 20px;
  position: relative;
  z-index: 1;
}

.feature-layout {
  overflow: hidden;
  background: var(--lightgray);
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
