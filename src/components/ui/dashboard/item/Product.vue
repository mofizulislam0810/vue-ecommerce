<template lang="">
    <div class="container py-2">
        <div class="bg-light mt-4 p-4 rounded-3">
            <div class="row g-3">
              <h4>All Products</h4>
              <table class="table table-striped table-sm">
                <thead class="text-center">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="product in products" :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.quantity}}</td>
                    <td>{{product.discount}}</td>
                    <td class="text-danger"><i class="fa fa-edit"></i><span class="ms-2"><i class="fa fa-trash" aria-hidden="true"></i></span></td>
                    </tr>
                </tbody>
                </table>           
            </div>
          </div>
    </div>
    
</template>
<script>
import axios from 'axios';
import { api } from '../../../../api/api'

export default {
    name: "Product",
    data: () => ({
        products: [],
    }),
    methods: {
        async product() {
            const result = await axios.get(api.product, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
            if (result.status === 200) {
                // console.log(result.data); 
                this.products = result.data;
            }
        }
    },
    async mounted() {
        this.product();
    }
}
</script>
<style lang="">
    
</style>