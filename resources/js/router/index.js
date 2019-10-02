import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from 'Views/Hello'
import Home from 'Views/Home'
import ProjectCreate from "Views/ProjectCreate";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/create',
            name: 'project.create',
            component: ProjectCreate
        },
    ],
});