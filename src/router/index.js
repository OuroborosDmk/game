import Vue from 'vue'
import Router from 'vue-router'
import mineSweeping from '@/component/mineSweeping'
/*
import calendar from '@/components/calendar'
import signup from '@/components/signup'
import login from '@/components/login'
import forgetpw from '@/components/forgetpw'
import blog from '@/components/blog'
*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    }
  ]
})
