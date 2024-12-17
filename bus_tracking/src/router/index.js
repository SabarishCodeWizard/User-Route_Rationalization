import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import RouteForm from "../views/RouteForm.vue";

// Add route guard to check if user is logged in
const auth = getAuth();

const routes = [
  {
    path: "/",
    name: "Home",
    component: RouteForm,
    meta: { requiresAuth: true }, // Protect this route
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation guard to check if user is logged in
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;

  // If route requires authentication and user is not logged in, redirect to login
  if (to.meta.requiresAuth && !user) {
    next("/login");
  } else {
    next();
  }
});

export default router;
