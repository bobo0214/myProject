import Vue from 'vue'
import Router from 'vue-router'
import Tree from './views/Tree.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'tree',
            component: Tree
        }
    ]
})