import Vue from 'vue';
import Vuex from 'vuex';
// import iconhome from '../assets/image/home_iconhome.png';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchShow:true,
    active:0,
    activeOrder:0,
    activeName:'超值套餐',
    value:"",
    chosencity:"",
    list:[
      {img:require('@/assets/image/home_iconhome.png'),activeImg:require('@/assets/image/home_activehome.png'), content:"首页",isActive:true,luyou:'/'},
      {img:require('@/assets/image/home_givewarm.png'),activeImg:require('@/assets/image/home_activewarm.png'),content:"送温暖",isActive:false,luyou:'givewarm'},
      {img:require('@/assets/image/home_chatbook.png'),activeImg:require('@/assets/image/home_activebook.png'),content:"通讯录",isActive:false,luyou:'chatbook'},
      {img:require('@/assets/image/home_mine.png'),activeImg:require('@/assets/image/home_activemine.png'),content:"我的",isActive:false,luyou:'mine'},
   ],
  
  },
  mutations: {
   changeSearch(state,searchShow){
       state.searchShow=searchShow;
   },
   changeActive(state,active){
    state.active=active;
   },
   changeActiveOrder(state,activeOrder){
    state.activeOrder=activeOrder;
   },
   changeActiveName(state,activeName){
     state.activeName=activeName;
   },
   changeValue(state,value){
     state.value=value;
   },
   choosecity(state,city){
    state.chosencity=city;
   },
  },
  actions: {

  }
})
