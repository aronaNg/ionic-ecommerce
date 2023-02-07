import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CategoriePage from '../views/CategoriePage.vue'
import ProduitPage from '../views/ProduitPage.vue'
import ProduitDetailPage from '../views/ProduitDetailPage.vue'
import AddProduitPage  from '../views/AddProduitPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },

  {
    path: '/categorie',
    name: 'CategoriePage',
    component: CategoriePage
  },

  {
    path: '/produit',
    name: 'ProduitPage',
    component: ProduitPage
  },
  {
    path: '/form',
    name: 'AddProduitPage',
    component: AddProduitPage
  },

  {
    path: '/todo/:id',
    name: 'ProduitDetailPage',
    component: ProduitDetailPage
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
