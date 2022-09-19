<template lang="">
    <div class="container mt-5">
        <div class="row g-1 justify-content-center bg-danger p-3 rounded-3">
            <div class="col-lg-12 d-flex justify-content-center flex-wrap">
                <div class="bg-white mx-2 p-2 rounded-3 my-1">
                    <span class="me-2 text-danger mouse__pointer" @click="selectedItems = ''"><i class="fa fa-fan"></i> All</span>
                </div>
                <div class="bg-white mx-2 p-2 rounded-3 my-1"  v-for="category in categories" :key="category.id">
                    <span class="me-2 text-danger mouse__pointer" @click="selectedItems = category.name"><i class="fa fa-fan"></i> {{category.name}}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row my-5 pb-5 g-3 justify-content-center">
            <div class="col-lg-2" v-for="product in filteredItems" :key="product.id">
                <div class="card">
                    <img :src="product.image" class="card-img-top img-fluid" alt="..." width="180px" height="180px">
                    <div class="card-body">
                        <router-link :to="'/detail/'+ product.id" class="card-title fs-5 d-block text-center">{{product.name}}</router-link>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-danger">Price: {{product.price}}</span>
                            <button class="btn btn-outline-danger btn-sm" @click="addToCart(product)">Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { api } from '../../../api/api'

export default {
    name: "Products",
    data: () => ({
        products: [],
        categories: [],
        selectedItems: ""
    }),
    methods: {
        async product() {
            const result = await axios.get(api.product, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
            if (result.status === 200) {
                // console.log(result.data); 
                this.products = result.data;
                // this.$store.commit("setUpProducts", result.data);
            }
        },
        async category() {
            const result = await axios.get(api.category, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
            if (result.status === 200) {
                this.categories = result.data;
            }
        },
        addToCart(product) {
            this.$store.dispatch("addToCart", product);
        }
    },
    computed: {
        filteredItems() {
            if (!this.selectedItems) {
                return this.products;
            }
            else {
                return this.products.filter(item => item.category === this.selectedItems)
            }
        }
    },
    async mounted() {
        this.product();
        this.category();
    },
}
</script>
<style scoped>
.mouse__pointer {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: red;
}
</style>