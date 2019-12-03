import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import store from './store'
// import './registerServiceWorker'
// console.log("vue de main")
import "./utils/filters";
// import "./utils/mui";
import "./styles/index.scss"
import Vant from "vant";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { Sku } from 'vant';
import { Card } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Notify } from 'vant';
import { Area } from 'vant';
import VueTouch from 'vue-touch';
import { List } from 'vant';

Vue.use(List);
Vue.use(VueTouch, {name: 'v-touch'})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


Vue.use(Area);

Vue.use(Notify);

Vue.use(Swipe).use(SwipeItem);
Vue.use(Card);
Vue.use(Sku);
Vue.use(Vant);
Vue.use(ElementUI);
import axios from "@/utils/axios.js";
// import axios from "axios";

Vue.prototype.$axios = axios;    // this==> Vue.prototype  this.$axios ==> axios ;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
