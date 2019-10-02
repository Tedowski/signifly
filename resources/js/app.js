import Vue from 'vue'
import App from './views/App'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    components: { App },
    router,
    template: '<App/>'
});
