<template>
    <header class="header" id="navbar">
        <div class="navbar">
            <g-link class="nav_link logo">TRAXIT</g-link>

            <div class="navbar-links" :class="{'collapsed-navbar-links': toggle}">
                <button class="toggle-nav-btn" type="button" @click="toggleNavbar"><i class="fas fa-bars"></i></button>

                <nav class="nav collapsed-nav" :class="{'toggled': toggle}">
                    <g-link class="nav_link" to="/">Home</g-link>
                    <g-link class="nav_link" to="/about">Our Mission</g-link>
                    <g-link class="nav_link" to="/pricing">Pricing</g-link>
                    <g-link class="nav_link" to="/features">Features</g-link>
                    <a class="nav_link login-btn" href="https://app.traxit.io/login">Login</a>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            toggle: false
        }
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
}

.navbar-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    z-index: 1;
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

.login-btn {
  background: var(--white);
  border: .5px solid var(--darkgray);
  border-radius: 5px;
  box-shadow: 0 0 5px 0 var(--darkgray);
  color: var(--main);
  padding: 2px 10px;
  margin-left: 35px;
  transition: background 1s;
}

.login-btn:hover {
  cursor: pointer;
}

@media screen and (max-width: 1160px) {
    .navbar {
        padding: 0 35px;
    }
}

@media screen and (max-width: 767px) {
    .navbar {
        padding-right: 0!important;
    }

    .collapsed-nav {
        display: none;
    }

    .toggle-nav-btn {
        display: block;
        align-self: center;
        background: transparent;
        margin-right: 35px;
        border: none;
        font-size: 1.15rem;
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
        width: 150px;
        padding: 10px;
        position: absolute;
        top: 25px;
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
    }

    .logo {
        align-self: center!important;
    }
}

</style>
