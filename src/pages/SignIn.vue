<template lang="">
    <div class="container my-5 py-5">
      <div class="row my-2 justify-content-center">
        <div style="max-width:500px">
          <div class="bg-light mt-4 p-4 rounded-3">
            <div  class="row g-3">
              <h4>Welcome To Sign In</h4>
              <div class="col-12 my-3">
                <input type="text" v-model="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col-12 my-3">
                <input type="password" v-model="password" class="form-control" placeholder="Password"/>
              </div>
              <div class="col-12 my-3">
                <button type="submit" class="btn btn-danger float-end w-100" @click="signin()">
                  Sign In
                </button>
              </div>
            </div>
            <hr class="mt-4" />
            <div class="col-12">
              <p class="text-center mb-0">
                Have not account yet?
                <router-link to="/signup" class="text-danger">
                        Sign Up
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { api } from '../api/api';
import axios from 'axios'
export default {
  name: 'SignIn',
  data: () => ({
    email: "",
    password: "",
  }),
  created() {
    const token = JSON.parse(sessionStorage.getItem('userInfo'));
    if (token) {
      return this.$router.push('/');
    }
    this.returnUrl = this.$route.query.returnUrl || "/";
  },
  methods: {
    async signin() {
      const result = await axios.post(api.signIn, {
        email: this.email,
        password: this.password
      })
      if (result.status === 200) {
        this.$store.commit('signIn', result.data);
        this.$router.push(this.$route.query.returnUrl || '/');
      }
      console.warn(result)
    },
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>