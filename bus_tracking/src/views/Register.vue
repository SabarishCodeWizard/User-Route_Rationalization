<!-- views/Login.vue -->
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
      <button @click="handleGoogleSignIn">Sign in with Google</button>
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  
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
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          alert("Login successful!");
          this.$router.push("/");
        } catch (error) {
          alert(error.message);
        }
      },
      async handleGoogleSignIn() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        try {
          await signInWithPopup(auth, provider);
          alert("Google sign-in successful!");
          this.$router.push("/");
        } catch (error) {
          alert(error.message);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add styling here */
  </style>
  