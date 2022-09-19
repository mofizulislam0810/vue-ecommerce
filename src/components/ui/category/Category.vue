<template lang="">
    <div class="container py-5">
        <div class="row my-5 g-4">
            <div class="col-lg-3">
                <div class="d-flex align-items-center justify-content-center category__item rounded-3 py-2 mx-1">
                    <div class="text-white fw-bold">
                    <h4>Fashion</h4>
                </div>
                <div class="ps-4">
                    <img src="../../../assets/images/category/product-candy.jpg" class="img-fluid rounded-circle"/>
                </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="d-flex align-items-center justify-content-center category__item rounded-3 py-2 mx-1">
                    <div class="text-white fw-bold">
                    <h4>Fashion</h4>
                </div>
                <div class="ps-4">
                    <img src="../../../assets/images/category/product-candy.jpg" class="img-fluid rounded-circle"/>
                </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="d-flex align-items-center justify-content-center category__item rounded-3 py-2 mx-1">
                    <div class="text-white fw-bold">
                    <h4>Fashion</h4>
                </div>
                <div class="ps-4">
                    <img src="../../../assets/images/category/product-candy.jpg" class="img-fluid rounded-circle"/>
                </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="d-flex align-items-center justify-content-center category__item rounded-3 py-2 mx-1">
                    <div class="text-white fw-bold">
                    <h4>Fashion</h4>
                </div>
                <div class="ps-4">
                    <img src="../../../assets/images/category/product-candy.jpg" class="img-fluid rounded-circle"/>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Category"
}
</script>
<style scoped>
.category__item {
    background-color: #dc3546b8;
    box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.284);
}

.category__item:hover {
    transition-timing-function: ease-in-out;
    transition: 0.5s;
    transform: translateY(-10px);
}

img {
    width: 70px;
    height: 70px;
}
</style>