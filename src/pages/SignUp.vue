<template lang="">
    <div class="container my-5 py-5">
      <div class="row my-2 justify-content-center">
        <div style="max-width:500px">
          <div class="bg-light mt-4 p-4 rounded-3">
            <div class="row g-3">
              <h4>Welcome To Sign Up</h4>
              <form @submit.prevent="signup()">
              <div class="col-12 my-3">
                <input type="text" v-model="first_name" class="form-control" placeholder="First Name" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="last_name" class="form-control" placeholder="Last Name" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="username" class="form-control" placeholder="User Name" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="phone" class="form-control" placeholder="Phone" required/>
              </div>
              <div class="col-12 my-3">
                <input type="email" v-model="email" class="form-control" placeholder="Email" required/>
              </div>
              <div class="col-12 my-3">
                <input type="password" v-model="password" class="form-control" placeholder="Password" required/>
              </div>
              <div class="col-12 my-3">
                <button type="submit" class="btn btn-danger float-end w-100">
                  Sign Up
                </button>
              </div>
            </form>
            </div>
            <hr class="mt-4" />
            <div class="col-12">
              <p class="text-center mb-0">
                Already Register?
                <router-link to="/signin" class="text-danger">Sign In</router-link> 
              </p>
            </div>
          </div>

          <div class="alert alert-warning mt-3 text-center" v-if="toast === true" role="alert">
            Sign Up successfully Please <router-link to="/signin" class="alert-link">Sign In</router-link>.
          </div>

        </div>
      </div>
    </div>
</template>
<script>
import { api } from '../api/api';
import axios from 'axios'
export default {
  name: "SignUp",
  data: () => ({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    toast: false
  }),
  created() {
    const token = JSON.parse(sessionStorage.getItem('userInfo'));
    if (token) {
      return this.$router.push('/');
    }
    this.returnUrl = this.$route.query.returnUrl || "/";
  },
  methods: {
    async signup() {
      const result = await axios.post(api.signUp, {
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        email: this.email,
        password: this.password,
        phone: this.phone
      })
      console.log(result);
      if (result.status === 200) {
        this.toast = true;
        this.first_name = "";
        this.last_name = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.phone = "";
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