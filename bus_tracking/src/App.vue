
<template>
  
  <RouterView />
</template>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "./firebase/firebase.js"; // Import your firebase auth configuration

export default {
  name: "App",
  setup() {
    const router = useRouter();
    
    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, navigate to RouteForm
        if (router.currentRoute.value.name === "Login" || router.currentRoute.value.name === "Register") {
          router.push("/"); // Redirect to home page (RouteForm)
        }
      } else {
        // If no user is logged in, redirect to login
        if (router.currentRoute.value.name !== "Login") {
          router.push("/login"); // Redirect to login page
        }
      }
    });
  },
};
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
