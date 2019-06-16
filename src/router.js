import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/home/Index.vue')
const Offer = () => import(/* webpackChunkName: "offer" */ './views/offer/Index.vue')
const Contact = () => import(/* webpackChunkName: "contact" */ './views/contact/Index.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: 'offer',
            name: 'offer',
            component: Offer
        },
        {
            path: 'contact',
            name: 'contact',
            component: Contact
        },
        { path: '*', redirect: '/' }
    ]
})
