import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            signInRes: "",
            cart: [],
            products: null,
            toast: {
                text: "",
                show: false
            }
        }
    },
    plugins: [createPersistedState()],
    getters: {
        cartSize: (state) => {
            return state.cart.length;
        },
        cartTotalAmount: (state) => {
            return state.cart.reduce((total, product) => {
                return total + (product.price * product.quantity);
            }, 0);
        },
        toast: (state) => {
            return state.toast;
        }
    },
    mutations: {
        signIn(state, userInfo) {
            state.signInRes = userInfo,
          // console.log(userInfo);
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        },
        signOut(state) {
            state.signInRes = "",
            sessionStorage.removeItem("userInfo");
            window.location.reload();
        },
        initializeStore(state) {
            if (JSON.parse(sessionStorage.getItem("userInfo"))) {
                state.signInRes = JSON.parse(sessionStorage.getItem("userInfo"));
            }
        },
        addToCart: (state, productItem) => {
            let cartProduct = state.cart.find((product) => product.id === productItem.id);
            if (cartProduct) {
                state.toast.show = true;
                state.toast.text = "already added in cart";
            } else {
                state.cart.push({
                    ...productItem,
                    stock: productItem.quantity,
                    quantity: 1,
                });
                state.toast.show = true;
                state.toast.text = "added to cart";
            }
        },
        incrementQuantity: (state, productItem) => {
            let cartProduct = state.cart.find((product) => product.id === productItem);
            if (cartProduct) {
                cartProduct.quantity++;
            }
        },
        removeFromCart: (state, productId) => {
            let product = state.products.find((product) => product.id === productId);
            let cartProduct = state.cart.find((product) => product.id === productId);
            cartProduct.quantity--;
            product.quantity++;
        },
        deleteFromCart: (state, productId) => {
            let product = state.products.find((product) => product.id === productId);
            let cartProductIndex = state.cart.findIndex((product) => product.id === productId);
            product.quantity = state.cart[cartProductIndex].stock;
            state.cart.splice(cartProductIndex, 1);
        },
        showToast: (state, toastText) => {
            state.toast.show = true;
            state.toast.text = toastText;
        },
        hideToast: (state) => {
            state.toast.show = false;
            state.toast.text = "";
        }
    },
    actions: {
        addToCart: ({ commit }, productItem) => {
            commit("addToCart", productItem);
        },
        incrementQuantity: ({ commit }, productId) => {
            commit("incrementQuantity", productId);
        },
        removeFromCart: ({ commit }, productId) => {
            commit("removeFromCart", productId);
            commit("showToast", "removed from cart");
        },
        deleteFromCart: ({ commit }, productId) => {
            commit("deleteFromCart", productId);
            commit("showToast", "deleted from cart");
        }
    }
})

export default store;