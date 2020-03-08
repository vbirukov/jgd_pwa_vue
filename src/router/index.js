import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage/HomeLayout.vue'
import OmPage from '../views/OmPage/OmLayout'
import SuryaPage from "../views/SuryaPage/SuryaLayout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/om',
        name: 'OmPage',
        component: OmPage
    },
    {
        path: '/surya',
        name: 'SuryaPage',
        component: SuryaPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
