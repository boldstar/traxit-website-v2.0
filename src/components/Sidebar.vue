<template>
    <div class="sidebar" :class="{'sidebar-collapsed': toggle}">
      <button class="sidebar-btn" type="button" @click="toggleSidebar">
       Toggle
      </button>
      <div class="feature-list" :class="{'show-links': toggle}">
        <ul>
          <li v-for="feature in features" :key="feature.id" @click="toggle = false">
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
  }

  .sidebar-btn {
    display: none;
  }

  ul {
    list-style: none;
    text-align: right;
    padding-left: 0;
    padding-right: 0;
  }

  li {
    margin-bottom: 5px;
    padding-left: 15px;
    width: 100%;
  }

  .features-link {
    text-decoration: none;
    color: var(--darkgray);
    font-weight: bold;
    font-size: 1.25rem;
  }

  .active-link {
    color: var(--main);
  }

  .feature-category {
    font-weight: bold;
    font-size: 1.2rem;
  }

@media screen and (max-width: 767px) {
  .features-link {
    font-size: .8rem;
  }

  .sidebar {
    width: 20px;
  }

  .feature-list {
    display: none;
  }

  .sidebar-btn {
    display: block!important;
    background: none;
    border: none;
    cursor: pointer!important;
    z-index: 2;
    padding: 0;
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
    width: 300px!important;
  }

  .show-links {
    display: flex;
    flex-direction: column;
  }
}
</style>

