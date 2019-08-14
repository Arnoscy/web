import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import FriendList from './../views/FriendList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GoodsList
    },    
    {
      path: '/friend',
      component: FriendList
    }
  ]
})
