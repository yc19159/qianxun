import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:"/",redirect:{name:'home'}},
    {
      path: '/',
      name: 'home',
      component: Home
    },
  
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('./views/Register.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: ()=> import('./views/Mine.vue')
    },
    
  
    {
      path: '/myorder/:active?',
      name: 'myorder',
      component: ()=> import('./views/MyOrder.vue'),
    },
   
    {
      path: '/addressedit',
      name: 'addressedit',
      component: ()=> import('@/views/Addressedit.vue'),
    },
    {
     path: '/personaldata',
      name: 'personaldata',
      component: ()=> import('@/views/PersonalData.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: ()=>import('@/views/Setting'),
    },
    {
      path: '/resetpwd',
      name: 'resetpwd',
      component: ()=>import('@/views/ResetPwd'),
    },{
      path: '/suggested',
      name: 'suggested',
      component: ()=>import('@/views/Suggested')
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: ()=> import('@/views/Addaddress.vue'),
    },
    {
      path: '/addressmanage',
      name: 'addressmanage',
      component: ()=> import('@/views/AddressManage.vue'),
    },

    {
      path: '/vipmember',
      name: 'vipmember',
      component: ()=> import('@/views/VipMember.vue'),
    },

   {
        path: '/chatbook',
        name: 'chatbook',
        component: ()=> import('@/views/ChatBook.vue'),
    },
  {
    path: '/test',
    name: 'test',
    component: ()=> import('@/views/Test.vue'),
  },
 {
  path: '/flowerwait/:orderId',
  name: 'flowerwait',
  component: ()=> import('@/views/FlowerWait.vue'),
},
{
  path: '/flowerpaysuccess/:orderId',
  name: 'flowerpaysuccess',
  component: ()=> import('@/views/FlowerPaysuccess.vue'),
},
{
  path: '/flowershoplist',
  name: 'flowershoplist',
  component: ()=> import('@/views/FlowerShopList.vue'),
},
{
  path: '/position',
  name: 'position',
  component: ()=> import('@/views/Position.vue'),
},
{
  path: '/flowershop',
  name: 'flowershop',
  component: ()=> import('@/views/FlowerShop.vue'),
},
{
  path: '/flowerorder',
  name: 'flowerorder',
  component: ()=> import('@/views/FlowerOrder.vue'),
},
{
  path: '/flowerdetail',
  name: 'flowerdetail',
  component: ()=> import('@/views/FlowerDetail.vue'),
},
{
  path: '/dindandetail',
  name: 'dindandetail',
  component: ()=> import('@/views/DindanDetail.vue'),
},
{
  path: '/comment',
  name: 'comment',
  component: ()=> import('@/views/Comment.vue'),
},
{
  path: '/commentlist',
  name: 'commentlist',
  component: ()=> import('@/views/CommentList.vue'),
},
{
  path: '/showcollect',
  name: 'showcollect',
  component: ()=> import('@/views/ShowCollect.vue'),
},

  ]
})
