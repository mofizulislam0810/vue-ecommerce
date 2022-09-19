<template lang="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 px-0">
          <SideNavbar />
        </div>
        <div class="col-lg-10">
          <main>
            <router-view></router-view>
          </main>
        </div>
      </div>
    </div>
  </template>
<script>
import SideNavbar from '../components/sidenavbar/SideNavbar.vue';
export default {
    name: "Dashboard",
    components: { SideNavbar }
}
</script>
<style lang="">
    
</style>