import Vue from 'vue';
import Router from 'vue-router';
import myindex from '@/components/Index';
import about from '@/components/About';
import car from '@/components/Car';
import service from '@/components/service';
import profile from '@/components/profile';
import news from '@/components/News';
import newsdetail from '@/components/NewsDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myindex',
      component: myindex
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsdetail',
      query:{
        newid:''
      },
      name: 'newsdetail',
      component: newsdetail
    }
  ]
})
