import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage/HomeLayout.vue'
import OmPage from '../views/OmPage/OmLayout'
import Meditations from '../views/Meditations/Meditations'
import TalksPage from '../views/Talks/TalksLayout'
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
    },
    {
        path: '/practice',
        name: 'MeditationsPage',
        component: Meditations
    },
    {
        path: '/learn',
        name: 'TalksPage',
        component: TalksPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
