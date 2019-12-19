import Vue from 'vue'
import Router from 'vue-router'

import ify from '../components/classify.vue'
import mine from '../components/Mine.vue'
import newly from '../components/Newly.vue'
import shop from '../components/shop.vue'
import site from '../components/Site.vue'
import home from '../components/Home.vue'
import details from '../components/details.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {path:'/',component:home},
      {path:'/home',component:home},
      {path:'/ify',component:ify},
      {path:'/shop',name:'shop',component:shop},
      {path:'/mine',component:mine},
      {path:'/details',name:'details',component:details},
      {path:'/newly',component:newly},
      {path:'/site',component:site}
  ]
})
