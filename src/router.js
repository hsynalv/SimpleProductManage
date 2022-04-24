import VueRouter from "vue-router"
import ProductList from "./Components/products/ProductList";
import ProductSell from "./Components/products/ProductSell";
import ProductPurchase from "./Components/products/ProductPurchase";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    { path : "/", component : ProductList},
    { path : "/urun-cikis", component : ProductSell},
    { path : "/urun-islemleri", component : ProductPurchase },
    { path : "*", redirect : "/"}
];

export const router = new VueRouter({
    mode : "history",
    routes
})