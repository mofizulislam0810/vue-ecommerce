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
                    <td class="text-danger"><span data-bs-toggle="modal" data-bs-target="#exampleModal" @click="getItem(product)"><i class="fa fa-edit"></i></span><span class="ms-2" @click="deleteProduct(product)"><i class="fa fa-trash" aria-hidden="true"></i></span></td>
                    </tr>
                </tbody>
                </table>           
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-12 my-3">
                <input type="text" v-model="name" class="form-control" placeholder="Name" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="description" class="form-control" placeholder="Description" required/>
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger btn-sm rounded" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-danger btn-sm rounded" @click="editProduct(item)">Save changes</button>
                </div>
                </div>
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
        id: "",
        name: '',
        description: '',
        category_id: '',
        inventory_id: '',
        price: '',
        discount_id: '',
        image: '',
        products: [],
        inventories: [],
        discounts: [],
    }),
    methods: {
        async product() {
            const result = await axios.get(api.product, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
            if (result.status === 200) {
                // console.log(result.data); 
                this.products = result.data;
            }
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
        getItem(item) {
            this.id = item.id;
            this.name = item.name;
            this.description = item.description;
            // category_id: '',
            this.inventory_id = item.inventory_id;
            this.price = item.price;
            this.discount_id = item.discount_id;
            this.image = item.image
        },
        async editProduct() {
            const result = await axios.put(api.product, {
                id: this.id,
                name: this.name,
                description: this.description,
                inventory_id: this.inventory_id,
                price: this.price,
                discount_id: this.discount_id,
                image: this.image
            }, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
            if (result.status === 200) {
                this.name = "";
                this.description = "";
                this.inventory_id = "";
                this.price = "";
                this.discount_id = "";
                this.image = ""
                alert('Product Edited Successfully!')
                this.product();
            }
            console.warn(result)
        },

        async deleteProduct(item) {
            const res = window.confirm("Are you sure for delete this product?");
            if (res) {
                const result = await axios.delete(api.product + '?Id=' + item.id, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
                if (result.status === 200) {
                    // console.log(result.data); 
                    alert("Delete successfully");
                    this.product();
                }
            }
        }
    },
    async mounted() {
        this.product();
        this.inventory();
        this.discount();
    }
}
</script>
<style scoped>

</style>