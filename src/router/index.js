import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loco from '../views/loco'
import Aprendendo from "../views/Aprendendo";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test2',
        name: 'Exercicios',
        component: Aprendendo
    },
    {
        path: '/test',
        name: 'sofoda',
        component: loco
        // Componente que será interpretado pela rota
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
