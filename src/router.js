import { createRouter, createWebHistory } from 'vue-router'
import TodoList from './pages/todoList/TodoList'
import TableData from './pages/table/TableData'

const routes = [
    { path: '/', component: TableData },
    { path: '/todo', component: TodoList },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
