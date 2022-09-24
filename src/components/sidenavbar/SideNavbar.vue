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
                <li class="nav-item my-2">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Add Items
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <li>
                                    <router-link to="/dashboard/addproduct" class="nav-link link-dark">
                                    <span><i class="fas fa-plus"></i></span>
                                    Add Product
                                </router-link>
                                </li>
                                <li>
                                    <router-link to="/dashboard/addcategory" class="nav-link link-dark">
                                    <span><i class="fas fa-plus"></i></span>
                                    Add Category
                                </router-link>
                                </li>
                                <li>
                                    <router-link to="/dashboard/addinventory" class="nav-link link-dark">
                                    <span><i class="fas fa-plus"></i></span>
                                    Add Inventory
                                </router-link>
                                </li>
                                <li>
                                    <router-link to="/dashboard/adddiscount" class="nav-link link-dark">
                                    <span><i class="fas fa-plus"></i></span>
                                    Add Discount
                                </router-link>
                                </li>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            View Items
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <li>
                                    <router-link to="/dashboard/viewproduct" class="nav-link link-dark">
                                    <span><i class="fas fa-eye"></i></span>
                                    Products
                                </router-link>
                                </li>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Reports
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"></div>
                        </div>
                    </div>
                    </div>
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
li {
    font-size: 12px;
}
</style>