<template>
  <div class="feature-layout">
    <Navbar id="navbar"/>
    <div class="feature-layout-container">
      <Sidebar />
      <transition name="fade" appear>
        <main>
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

main {
  background-color: var(--white);
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
