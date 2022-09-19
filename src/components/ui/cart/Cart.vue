<template lang="">
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Cart Item</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="container"> 
        <h1 class="my-2">Cart <span class="badge badge-secondary">{{cartSize}} products</span></h1>
        <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert"> 
            Cart is empty! Please add some products. 
        </div>
        <table v-else class="table table-striped mb-5 table-sm">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cart" :key="product.id">
              <th scope="row">{{index + 1}}</th>
              <td>{{product.name}}</td>
              <td>$ {{product.price}}</td>
              <td>
                  <button 
                      @click="removeFromCart(product.id)"
                      :disabled="product.quantity === 1"
                      class="btn btn-outline-danger btn-sm">
                      -
                  </button>
                  <span class="mx-2">{{product.quantity}}</span>
                  <button 
                      @click="incrementQuantity(product.id)" 
                      :disabled="product.quantity === product.stock"
                      class="btn btn-outline-success btn-sm">
                      +
                  </button>
              </td>
              <td><button 
                  @click="deleteFromCart(product.id)"
                  class="btn btn-danger btn-sm">
                  <i class="fa fa-trash" aria-hidden="true"></i>
              </button></td>
              <td>$ {{product.quantity* product.price}}</td>
            </tr>
            
            <tr class="table-footer"> 
                <td colspan="5" class="total">Total:</td> 
                <td>$ {{cartTotalAmount}}</td> 
            </tr>
          </tbody>
        </table>
    </div> 
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: "Cart",
    data: () => ({
    }),
    computed: {
        ...mapState([
            "cart"
        ]),
        ...mapGetters([
            "cartSize",
            "cartTotalAmount"
        ])
    },
    methods: {
        incrementQuantity(id) {
            this.$store.dispatch("incrementQuantity", id);
        },
        removeFromCart(id) {
            this.$store.dispatch("removeFromCart", id);
        },
        deleteFromCart(id) {
            this.$store.dispatch("deleteFromCart", id);
        }
    }
}
</script>
<style>
table {
    font-size: 12px;
}
</style>