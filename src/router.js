import { createRouter, createWebHistory } from 'vue-router'
import TodoList from './pages/TodoList'
import AboutMe from './pages/AboutMe'

const routes = [
    { path: '/', component: TodoList },
    { path: '/about', component: AboutMe }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
