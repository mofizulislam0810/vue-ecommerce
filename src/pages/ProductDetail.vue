<template lang="">
     <div class="container my-5 py-5">
        <div class="row align-item-center gx-5">
          <div class="col-md-5 col-12 ">
            <div class="d-flex justify-content-center">
              <img class="mx-auto card-img-top img-fluid" :src="productItem.image" alt="..."/>
            </div>
          </div>
          <div class="col-md-7 col-12 my-auto shadow p-5 bg-white rounded">
            <div class="p-0">
              <h3 class="fw-bold mb-3">
                <b>{{productItem.name}}</b>
              </h3>
              <p class="m-3">
                <b>Description: {{productItem.description}}</b> 
              </p>
              <h3 class="fw-bold m-3">Price: &#2547; {{productItem.price}}</h3>
              <button class="btn btn-outline-danger text-center w-25 btn-sm"  @click="addToCart(productItem)">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import axios from 'axios';
import { api } from '../api/api';

export default {
  name: 'ProductDetails',
  data: () => ({
    productItem: {},
  }),
  methods: {
    async product() {
      const result = await axios.get(api.product + '/GetProduct/' + this.$route.params.id);
      // console.log(result);
      this.productItem = result.data;
    },
    addToCart(productItem){
        this.$store.dispatch("addToCart", productItem);
     }
  },
  async mounted() {
    this.product();
  },
}
</script>
<style scoped>
  img{
    width: 300px;
    height: 300px;
  }
</style>