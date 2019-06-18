<template>
    <header class="header" id="navbar">
        <div class="navbar">
            <g-link class="nav_link logo" to="/"><Logo /></g-link>

            <div class="navbar-links" :class="{'collapsed-navbar-links': toggle}">
                <button class="toggle-nav-btn" type="button" @click="toggleNavbar"><i class="fas fa-bars"></i></button>

                <nav class="nav collapsed-nav" :class="{'toggled': toggle}">
                    <g-link class="nav_link" to="/about">Our Mission</g-link>
                    <g-link class="nav_link" to="/feature/dashboard-feature">How It Works</g-link>
                    <g-link class="nav_link" to="/pricing">Pricing</g-link>
                    <a class="nav_link" href="https://app.traxit.io/login">Login</a>
                    <g-link to="/trial" class="free-btn" @click="showFreeTrialForm">Start Free Trial</g-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import {EventBus} from '~/utils/event.js'
export default {
    name: 'Navbar',
    data() {
        return {
            toggle: false
        }
    },
    components: {
        Logo
    },
    methods: {
        toggleNavbar() {
            this.toggle = !this.toggle
        },
         handleSCroll (event) {
        let header = document.querySelector("#navbar");
        if (window.scrollY > 100 && !header.className.includes('navbar-sticky')) {
            header.classList.add('navbar-sticky'); 
        } else if (window.scrollY < 100) {
            header.classList.remove('navbar-sticky');
        }
      },
      showFreeTrialForm() {
          EventBus.$emit('start-registration')
      }
    },
    mounted() {
        window.addEventListener('scroll', this.handleSCroll);
    },
}
</script>

<style scoped>
.nav_link {
    text-decoration: none;
    color: var(--darkgray);
    align-self: center;
    margin-left: 35px;
    font-size: 1.25rem;
}

.logo {
    color: var(--main);
    font-weight: 800;
    margin-left: 0!important;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: var(--lightgray);
    position: relative;
    z-index: 1000;
}

.active--exact {
    color: var(--main);
}

.navbar-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    z-index: 1000;
    box-shadow: 0 1px 10px rgba(0,0,0,250);
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    height: 70px;
}

.navbar-links {
    display: flex;
}

nav {
    align-self: center;
}

.toggle-nav-btn {
    display: none;
}

.free-btn {
    background: var(--white);
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 var(--darkgray);
    color: var(--main);
    height: 30px;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 35px;
    transition: background 1s;
    text-decoration: none;
    padding: 5px 10px;
}

.free-btn:hover {
    margin-top: 2px;
    cursor: pointer;
    background: var(--lightgray);
    box-shadow: 0 0 10px 0 var(--main);
    color: var(--darkgray);
}

@media screen and (max-width: 1160px) {
    .navbar {
        padding: 0 35px;
    }
}

@media screen and (max-width: 850px) {
    .navbar {
        padding-right: 0!important;
        padding-left: 20px!important;
    }

    .collapsed-nav {
        display: none;
    }

    .toggle-nav-btn {
        display: flex;
        align-self: center;
        background: transparent;
        margin-right: 35px;
        border: none;
        font-size: 1.35rem;
        position: relative;
        right: -5px;
        top: 3px;
        cursor: pointer;
        color: var(--darkgray);
    }

    .toggle-nav-btn:focus {
        outline: none;
    }

    .toggled {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        width: 200px;
        padding: 10px;
        position: absolute;
        top: 35px;
        right: 35px;
        border: 1px solid var(--lightgray);
        border-radius: 5px;
        background-color: white;
        box-shadow: 2px 3px 3px 0 rgba(0,0,0,.150);
    }

    .collapsed-navbar-links {
        flex-direction: column;
        align-items: flex-end;
        height: 250px;
        position: absolute;
        right: 0;
        top: 16px;
    }

    .nav_link {
        margin-right: 0;
        align-self: flex-end;
        margin-bottom: 10px;
    }

    .logo {
        align-self: center!important;
        margin-bottom: 0!important;
    }

    .free-btn {
        height: 25px;
    }
}

</style>
