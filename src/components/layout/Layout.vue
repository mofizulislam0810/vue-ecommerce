<template lang="">
    <Navbar />
    <Cart />
       <main>
          <router-view></router-view>
       </main>
       <Toast :show="toast.show" :text="toast.text" @hide-toast="hideToast"></Toast>
     <Footer />
</template>
<script>
import Navbar from '../navbar/Navbar.vue';
import Footer from '../footer/Footer.vue';
import Cart from '../ui/cart/Cart.vue';
import Toast from '../ui/common/toast/Toast.vue';


export default {
    name: "Layout",
    components: { Navbar, Footer, Cart, Toast },
    computed: {
        toast() {
            return this.$store.getters.toast;
        }
    },
    methods: {
        hideToast() {
            this.$store.commit("hideToast");
        }
    }
}
</script>
<style lang="">
    
</style>