import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import BrandPage from '../pages/BrandPage.vue'
import ModelPage from '../pages/ModelPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import UserPage from '../pages/UserPage.vue'
import OrderPage from '../pages/OrderPage.vue'

const routes = [
	{ path: '/', name: 'home', component: MainPage },
	{ path: '/category', name: 'category', component: CategoryPage },
	{ path: '/brand', name: 'brand', component: BrandPage },
	{ path: '/model', name: 'model', component: ModelPage },
	{ path: '/product', name: 'product', component: ProductPage },
	{ path: '/user', name: 'user', component: UserPage },
	{ path: '/order', name: 'order', component: OrderPage },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
