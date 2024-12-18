<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>
      <a href="#" @click.prevent="handleForgotPassword">Forgot Password?</a>
    </p>
    <p>
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
    <button @click="handleGoogleSignIn">Sign in with Google</button>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const auth = getAuth();
      const router = useRouter();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert("Login successful!");
        router.push("/");
      } catch (error) {
        alert(error.message);
      }
    },
    async handleGoogleSignIn() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const router = useRouter();
      try {
        await signInWithPopup(auth, provider);
        alert("Google sign-in successful!");
        router.push("/");
      } catch (error) {
        alert(error.message);
      }
    },
    async handleForgotPassword() {
      const auth = getAuth();
      if (!this.email) {
        alert("Please enter your email to reset your password.");
        return;
      }
      try {
        await sendPasswordResetEmail(auth, this.email);
        alert("Password reset email sent! Please check your inbox.");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
