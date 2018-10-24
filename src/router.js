import Vue from 'vue'
import Router from 'vue-router'
import config from "@/config";
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Answer from '@/views/answer/index'
import Order from '@/views/order/index'
import Lucky from '@/views/lucky/index'
Vue.use(Router)
export default new Router({
    mode: config.routerMode,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path:'/',
            component:Layout,
            children:[
                {
                    path:'/answer',
                    name:'answer',
                    component:Answer
                },
                {
                    path:'/order',
                    name:'order',
                    component:Order
                },
                {
                    path:'/lucky',
                    name:'lucky',
                    component:Lucky
                },
            ]
        },
    ],
})