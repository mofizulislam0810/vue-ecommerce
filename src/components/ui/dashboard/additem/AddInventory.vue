<template lang="">
    <div class="container py-2">
      <div class="row justify-content-center">
          <div class="bg-light mt-4 p-4 rounded-3">
            <div class="row g-3">
              <h4>Add Inventory</h4>
              <form @submit.prevent="inventory()">
              <div class="col-12 my-3">
                <input type="text" v-model="quantity" class="form-control" placeholder="Quantity" required/>
              </div>
              <div class="col-12 my-3 text-center">
                <button type="submit" class="btn btn-danger" :disabled="loading === true">
                  <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Save
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
  name: "AddInventory",
  data: () => ({
    loading: false,
    quantity: "",
  }),
  methods: { 
    async inventory() {
      this.loading = true
      const result = await axios.post(api.inventory, {
        quantity: this.quantity,
      }, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
      if (result.status === 200) {
        this.quantity = "";
        this.$store.commit("showToast", "added successfully")
        this.loading = false;
      }
      console.warn(result)
    },
  },
}
</script>
<style lang="">
    
</style>