import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  User from "../components/User/User.vue"
//import listUser from '../components/User/ListUser.vue'
import ajoutUser from '../components/User/AjoutUser.vue'
import DetailsUser from '../components/User/DetailsUser.vue'
import EditerUser from '../components/User/EditerUser.vue'
//import login from '../components/authentification/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    {
      path: '/user',
      name: 'user',
      component: User
    },

    {
      path: '/ajouter',
      name: 'ajout-User',
      component: ajoutUser
    },
    {
      path: '/modifier/:id',
      name: 'midification',
      component: EditerUser
    },
    {
      path: '/detail/:id',
      name: 'details',
      component: DetailsUser
    },
    {
      path: '/list/:id',
      name: 'details',
      component: DetailsUser
    },
   /* {
      path: '/login',
      name: 'login',
      component: DetailsUser
    },*/

   /* {
      path: '/ajouter',
      name: 'ajout-user',
      component: AjoutUser
    },
    */
 




    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
