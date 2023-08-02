import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutMe }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
