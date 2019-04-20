<template>
    <div class="sidebar" :class="{'sidebar-collapsed': toggle}">
      <div class="feature-list">
        <button class="sidebar-btn" type="button" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="feature-list-links"  :class="{'show-links': toggle}">
          <li class="feature-link-li" v-for="feature in features" :key="feature.id" @click="toggle = false">
            <g-link class="features-link" :to="feature.node.path" :class="{'active-link' : feature.node.path == $route.path}">{{ feature.node.title }}</g-link>
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
    name: 'Sidebar',
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
  .sidebar {
    max-width: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--lightgray);
    padding: 10px;
    align-self: flex-start;
  }

  .sidebar-btn {
    display: none;
  }

  .feature-list-links {
    list-style: none;
    text-align: right;
    padding-left: 0;
    padding-right: 0;
    background: var(--lightgray);
    width: 175px;
  }

  .feature-link-li {
    margin-bottom: 5px;
    padding-left: 0;
    margin-right: 15px;
    width: 100%;
  }

  .features-link {
    text-decoration: none;
    color: var(--darkgray);
    font-weight: bold;
    font-size: 1.25rem;
    width: 100%;
  }

  .active-link {
    color: var(--main);
    padding: 5px;
    width: 100%;
  }

  .feature-category {
    font-weight: bold;
    font-size: 1.2rem;
  }

@media screen and (max-width: 767px) {
  .features-link {
    font-size: .8rem;
    padding-top: 0;
  }

  .sidebar {
    width: 20px;
    transition: width .2s;
  }

  .feature-list-links {
    display: none;
  }

  .sidebar-btn {
    display: block!important;
    background: none;
    border: none;
    cursor: pointer!important;
    z-index: 2;
    padding: 0;
    position: absolute;
    left: 0;
    background-color: var(--white);
    padding: 2px 5px;
    border-radius: 3px;
    border: .5px solid var(--main);
    top: 20px;
  }

  .btn-icon {
    display: block!important;
    font-size: 1.4rem!important;    
    align-self: center;
    margin-top: 0!important;
    cursor: pointer!important;
    color: var(--main);
  }

  .sidebar-collapsed {
    width: 100px!important;
    position: relative;
    transition: width .2s;
  }

  .show-links {
    display: flex;
    flex-direction: column;
    width: 100px!important;
    margin-top: 5px;
  }
}
</style>

