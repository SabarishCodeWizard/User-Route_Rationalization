import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import RouteForm from "../views/RouteForm.vue";
import { auth } from "../firebase/firebase";

const routes = [
  { path: "/", name: "Home", component: RouteForm, meta: { requiresAuth: true } },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  const user = getAuth().currentUser;

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !user) {
    next("/login"); // If user is not authenticated, redirect to login
  } else {
    next(); // Otherwise, proceed with navigation
  }
});

export default router;
