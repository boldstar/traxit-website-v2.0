<template>
    <div class="feature-menu" :class="{'toggle-feature-menu': toggle}">
        <button class="feature-menu-btn" type="button" @click="toggleSidebar">
            View Features
        </button>
      <div class="feature-menu-list" :class="{'toggle-menu': toggle}">
        <ul class="feature-menu-list-links" :class="{'toggle-height': toggle}">
          <li class="feature-menu-link-li" v-for="feature in features" :key="feature.id" @click="toggle = false">
            <g-link class="features-menu-link" :to="feature.node.path" :class="{'active-menu-link' : feature.node.path == $route.path}">{{ feature.node.title }}</g-link>
          </li>
        </ul>
        </div>
    </div>
</template>

<static-query>
  query features {
    features: allPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</static-query>

<script>
export default {
    name: 'FeatureMenu',
    data() {
      return {
        toggle: false
      }
    },
    computed: {
        features() {
            return this.$static.features.edges.slice().reverse()
        }
    },
    methods: {
      toggleSidebar() {
        this.toggle = !this.toggle
      }
    }
}
</script>

<style>
  @media screen and (max-width: 767px) {
      .feature-menu {
          position: relative;
          top: 25px;
          height: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 100;
          padding: 0 35px;
      }

      .feature-menu-list {
          visibility: hidden;
          width: 100%;
          opacity: 0;
      }

      .toggle-menu {
          height: 100%!important;
          visibility: visible;
          opacity: 1;
          transition: visibility 1s, opacity 300ms;
      }

    .feature-menu-list-links {
        margin: 0;
        list-style: none;
        text-align: right;
        padding-left: 0;
        padding-right: 0;
        background: var(--lightgray);
        width: 100%;
        height: 0;
        color: var(--darkgray);
        border-radius: 0 0 5px 5px;
        transition: height 5s;
    }

    .toggle-height {
        height: 100%!important;
        min-height: calc(100vh - 150px)!important;
        max-height: calc(100vh - 150px)!important;
    }

    .feature-menu-link-li {
        margin-bottom: 5px;
        padding-left: 0;
        margin-left: 15px;
        width: 100%;
        text-align: left;
    }

    .features-menu-link {
        text-decoration: none;
        color: var(--darkgray);
        font-weight: bold;
        font-size: 1.25rem;
        width: 100%;
    }

    .active-menu-link {
        color: var(--main);
        padding: 5px;
        width: 100%;
    }

    .feature-menu-btn {
        background: var(--white);
        border: none;
        border-radius: 5px 5px 0 0;
        color: var(--main);
        height: 20px;
        width: 100%;
        font-weight: 600;
    }
  }
</style>


