import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'
import Plate from '../views/items/Plate.vue'
import Paper from '../views/items/Paper.vue'
import Lace from '../views/items/Lace.vue'
import Mirror from '../views/items/Mirror.vue'
import FileNotFoound from '../views/FileNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index.html',
      name: 'home',
      component: Home
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    ,
    {
      path: '/items/paper',
      name: 'paper',
      component: Paper
    },
    ,
    {
      path: '/items/plate',
      name: 'plate',
      component: Plate
    },
    ,
    {
      path: '/items/lace',
      name: 'lace',
      component: Lace
    },
    ,
    {
      path: '/items/mirror',
      name: 'mirror',
      component: Mirror
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'File Not Found',
      component: FileNotFoound
    },
  ]
})

export default router
