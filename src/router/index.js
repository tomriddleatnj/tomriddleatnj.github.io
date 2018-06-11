import Vue from 'vue'
import VueRouter from 'vue-router'

const routers = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['../views/index.vue'], resolve)
    }, {
        path: '/lunch',
        name: 'lunch',
        meta: {
            title: '中午吃什么'
        },
        component: (resolve) => require(['../views/lunch.vue'], resolve)
    }, {
        path: '/biography',
        name: 'biography',
        meta: {
            title: '传记'
        },
        component: (resolve) => require(['../views/biography.vue'], resolve)
    }
]

Vue.use(VueRouter)

const RouterConfig = {
    mode: 'history',
    routes: routers
}
const router = new VueRouter(RouterConfig)

export default router