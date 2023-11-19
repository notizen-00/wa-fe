import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/App/Beranda.vue'
import Login from '@/pages/Auth/Login.vue'
import Pesan from '@/pages/App/Pesan.vue'
import Kontak from '@/pages/App/Kontak.vue'
import { useStore } from '@/Store/modules'

const routes = [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path:'/pesan',
      name:'Pesan',
      component:Pesan
    },
    {
      path:'/kontak',
      name:'Kontak',
      component:Kontak
    },
    {
      path: '/dashboard',
      name:'Dashboard',
      component:Home
    },
    {
    path: '/login',
    component:Login
    }

   
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  router.beforeEach((to, from, next) => {
    const store = useStore()

    // const Login = store.authStore.isLogin;
    const Login = true;
    if (to.path !== '/login' && !Login) {
      next('/login'); 
    } else {
      next();  
    }
  });
  
  
  export default router
  
