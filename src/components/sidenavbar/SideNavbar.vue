<template lang="">
    <div>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 100%;height:100vh">
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <router-link to="/dashboard" class="nav-link active" aria-current="page">
                    <svg class="bi me-2" width="16" height="10"><use xlink:href="#home"></use></svg>
                    Dashboard
                </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/addproduct" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="10"><use xlink:href="#speedometer2"></use></svg>
                    Add Product
                </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/addcategory" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="10"><use xlink:href="#grid"></use></svg>
                    Add Category
                </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/addinventory" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="10"><use xlink:href="#table"></use></svg>
                    Add Inventory
                </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/adddiscount" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="10"><use xlink:href="#table"></use></svg>
                    Add Discount
                </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/viewproduct" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="10"><use xlink:href="#people-circle"></use></svg>
                    Products
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "SideNavbar"
}
</script>
<style scoped>
</style>