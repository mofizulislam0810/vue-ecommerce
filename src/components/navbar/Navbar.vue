<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container">
            <router-link class="navbar-brand" to="/">E-commerce</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                 <li class="nav-item" v-if="$store.state.signInRes.token && $store.state.signInRes.role === 'admin'">
                <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="!$store.state.signInRes.token">
                <router-link class="nav-link" to="/signin">Sign In</router-link>
                </li>
                <li class="nav-item" v-if="!$store.state.signInRes.token">
                <router-link class="nav-link" to="/signup">Sign Up</router-link>
                </li>
                <li class="nav-item" v-if="$store.state.signInRes.token">
                <router-link class="nav-link" to="">{{$store.state.signInRes.username}}</router-link>
                </li>
                <li class="nav-item" v-if="$store.state.signInRes.token">
                  <a class="nav-link" @click="signOut()">SignOut</a>
                </li>
                <li class="nav-item">
                <span class="nav-link text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-cart-arrow-down"></i><span><sup class="text-white fw-bold ms-1">{{cartSize}}</sup></span></span>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Navbar',
    data: () => ({

    }),
    computed: {
            ...mapGetters([
                "cartSize"
            ])
    },
    methods: {
        signOut() {
            this.$store.commit('signOut')
        }
    }
}
</script>
<style scoped>
span sup {
    font-size: 15px;
}

a {
    color: white !important;
    cursor: pointer;
}
</style>