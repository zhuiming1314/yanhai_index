import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import FirstPage from '@/components/FirstPage'
import Login from '@/components/Login'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: FirstPage
    },
    {
      path: '/typography',
      name: '智能排版',
      component: Test
    },
    {
      path: '/color',
      name: '智能配色',
      component: Test
    },
    {
      path: '/create',
      name: 'AI元素创作',
      component: Test
    },
    {
      path: '/library',
      name: '素材库',
      component: Test
    },
    {
      path: '/application',
      name: '应用模板',
      component: Test
    },
    {
      path: '/shopping',
      name: '购买中心',
      component: Test
    },
    {
      path:'/register',
      name:'注册',
      component:Test
    },
    {
      path:'/login',
      name:'登录',
      component:Login
    }
  ]
});

//导航守卫
//使用router.beforeEach注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next)=>{
  console.log('from:', from.path)
  console.log('to:', to.path)
  /*if(to.path === '/login' || to.path==='/'){
    next();
  }else{
    let token = localStorage.getItem('Authorization');
    if(token===null || token===''){
      next('/login')
    }else{
      next();
    }
  }*/
  next();
})

export default router;