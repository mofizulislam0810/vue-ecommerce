import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import Dashboard from "../pages/Dashboard.vue";
import ProductDetail from "../pages/ProductDetail.vue";


const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        meta: { auth: false },
    },
    {
        name: "SignIn",
        path: "/signin",
        component: SignIn,
        meta: { auth: false },
    },
    {
        name: "SignUp",
        path: "/signup",
        component: SignUp,
        meta: { auth: false },
    },
    {
        name: "ProductDetail",
        path: "/detail/:id",
        component: ProductDetail,
        meta: { auth: false },
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        component: Dashboard,
        meta: { auth: true },
        children: [
            //CLIENTS
            {
                name: 'DashboardHome',
                path: '',
                component: () => import('../components/ui/dashboard/home/DashboardHome.vue'),
            },
            {
                name: 'AddProduct',
                path: '/dashboard/addproduct',
                component: () => import('../components/ui/dashboard/additem/AddProduct.vue'),
            },
            {
                name: 'AddCategory',
                path: '/dashboard/addcategory',
                component: () => import('../components/ui/dashboard/additem/AddCategory.vue'),
            },
            {
                name: 'AddInventory',
                path: '/dashboard/addinventory',
                component: () => import('../components/ui/dashboard/additem/AddInventory.vue'),
            },
            {
                name: 'AddDiscount',
                path: '/dashboard/adddiscount',
                component: () => import('../components/ui/dashboard/additem/AddDiscount.vue'),
            },
            {
                name: 'Product',
                path: '/dashboard/viewproduct',
                component: () => import('../components/ui/dashboard/item/Product.vue'),
            }
        ],
    },
    { path: "/:catchAll(.*)", redirect: "/" }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = JSON.parse(sessionStorage.getItem('userInfo'));
    if (to.meta.auth) {
        if (token) {
            next();
        } else {
            next({ path: "/signin", query: { returnUrl: to.path } });
        }
    } else {
        next();
    }
});

export default router;