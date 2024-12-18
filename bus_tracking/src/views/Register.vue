<!-- views/Register.vue -->
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          required
        />
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account? <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useRouter } from "vue-router";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const auth = getAuth();
      const db = getDatabase();
      const router = useRouter();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const userId = userCredential.user.uid;

        // Store additional user details in Firebase Realtime Database
        await set(ref(db, `users/${userId}`), {
          username: this.username,
          email: this.email,
          phone: this.phone,
        });

        alert("Registration successful! Redirecting to login page...");
        router.push("/login");
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
