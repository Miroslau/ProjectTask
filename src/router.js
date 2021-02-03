import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./Home.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('./components/SearchFamily.vue'),
            props: true
        },
        {
            path: '/accountpage/:id',
            name: 'accountpageId',
            component: () => import('./pages/AccountPage.vue'),
            props: true
        }
    ]
})