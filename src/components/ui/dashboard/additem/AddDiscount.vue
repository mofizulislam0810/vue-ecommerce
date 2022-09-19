<template lang="">
    <div class="container py-2">
      <div class="row justify-content-center">
          <div class="bg-light mt-4 p-4 rounded-3">
            <div class="row g-3">
              <h4>Add Discount</h4>
              <form @submit.prevent="discount()">
              <div class="col-12 my-3">
                <input type="text" v-model="name" class="form-control" placeholder="Name" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="description" class="form-control" placeholder="Description" required/>
              </div>
              <div class="col-12 my-3">
                <input type="text" v-model="discount_percent" class="form-control" placeholder="Discount Percent" required/>
              </div>
              <div class="col-12 my-3 d-flex">
                <div class="form-check me-3">
                  <input class="form-check-input" type="radio" value=1 v-model="active" name="flexRadioDefault" id="flexRadioDefault1" checked>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Active
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" value=0 v-model="active" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    Inactive
                  </label>
                </div>
              </div>
              <div class="col-12 my-3 text-center">
                <button type="submit" class="btn btn-danger">
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
  name: "AddDiscount",
  data: () => ({
    name: "",
    description: "",
    discount_percent: "",
    active: 1
  }),
  methods: {
    async discount() {
      const result = await axios.post(api.discount, {
        name: this.name,
        description: this.description,
        discount_percent: this.discount_percent,
        active: this.active
      }, { headers: { Authorization: 'Bearer ' + this.$store.state.signInRes.token } })
      if (result.status === 200) {
        this.name = "";
        this.description = "";
        this.discount_percent = "",
          this.active = 1
        alert('Discount Added Successfully!')
      }
      console.warn(result)
    },
  },
}
</script>
<style lang="">
    
</style>