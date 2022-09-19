<template lang="">
    <div class="container py-2">
      <div class="row justify-content-center">
          <div class="bg-light mt-4 p-4 rounded-3">
            <div class="row g-3">
              <h4>Add Product</h4>
              <form  @submit.prevent="product()">
              <div class="col-12 my-3">
                <input type="text" v-model="name" class="form-control" placeholder="Name" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="description" class="form-control" placeholder="Description" required/>
              </div>
              <div class="col-12 my-3">
                <select class="form-select" v-model="category_id" aria-label="Default select example">
                  <option disabled value="">Please select category one</option>
                  <option v-for="(category,index) in categories" v-bind:value="category.id" :key="index">{{ category.name }}</option>
                </select>
              </div>
              <div class="col-12 my-3">
                <select class="form-select" v-model="inventory_id" aria-label="Default select example">
                  <option disabled value="">Please select quantity</option>
                  <option v-for="(inventory,index) in inventories" v-bind:value="inventory.id" :key="index">{{ inventory.quantity }}</option>
              </select>
              </div>
              <div class="col-12 my-3">
                <input type="number" v-model="price" class="form-control" placeholder="Price" required/>
              </div>
              <div class="col-12 my-3">
                <select class="form-select" v-model="discount_id" aria-label="Default select example">
                  <option disabled value="">Please select discount</option>
                  <option v-for="(discount,index) in discounts" v-bind:value="discount.id" :key="index">{{ discount.discount_percent }}</option>
              </select>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="image" class="form-control" placeholder="Image" required/>
              </div>
              <div class="col-12 my-3 text-center">
                <button type="submit" class="btn btn-danger w-25">
                  Sign Up
                </button>
              </div>
            </form>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
import { api } from '../../../../api/api';

export default {
  name: "AddProduct",
  data: () => ({
    name:'',
    description:'',
    category_id:'',
    inventory_id:'',
    price:'',
    discount_id:'',
    image:'',
    categories: [],
    inventories: [],
    discounts: []
  }),
  methods: { 
    async category() {
      const result = await axios.get(api.category, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
      if (result.status === 200) {
         this.categories = result.data;
      }
      console.warn(result)
    },
    async inventory() {
      const result = await axios.get(api.inventory, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
      if (result.status === 200) {
         this.inventories = result.data;
      }
      console.warn(result)
    },
    async discount() {
      const result = await axios.get(api.discount, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
      if (result.status === 200) {
         this.discounts = result.data;
      }
      console.warn(result)
    },
    async product() {
      const result = await axios.post(api.product, {
        name: this.name,
        description: this.description,
        category_id: this.category_id,
        inventory_id: this.inventory_id,
        price: this.price,
        discount_id: this.discount_id,
        image: this.image,
      }, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
      if (result.status === 200) {
        this.name = "";
        this.description = "";
        this.category_id = "";
        this.inventory_id = "";
        this.price = "";
        this.discount_id = "";
        this.image = "";
        alert('Product Added Successfully!')
      }
      console.warn(result)
    },
  },
  async mounted() {
        this.category();
        this.inventory();
        this.discount()
  },
}
</script>
<style lang="">
    
</style>