import Vue from 'vue';
import Router from 'vue-router';
import Beer from '@/views/Beer';
import Favourite from '@/views/Favourite'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/beer',
      name: 'beer',
      component: Beer
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    }

  ]
})
export default router;
