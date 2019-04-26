import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import demoList from '@/components/demo/demoList';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    children: [{
      path: 'demoList',
      name: 'demoList',
      component: demoList
    }]
  }]
});
