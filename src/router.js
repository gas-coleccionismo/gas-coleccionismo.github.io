import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import Item from './views/Item.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/coleccion/:numero',
    name: 'collection',
    component: Collection
  },
  {
    path: '/coleccion/:numero/item/:itemId',
    name: 'item',
    component: Item
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
