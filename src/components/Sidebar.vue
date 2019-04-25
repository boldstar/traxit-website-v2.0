<template>
    <div class="sidebar">
      <div class="feature-list">
        <ul class="feature-list-links">
          <li class="feature-link-li" v-for="feature in features" :key="feature.id">
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
  .sidebar {
    display: none;
  }
}
</style>

