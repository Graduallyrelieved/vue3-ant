import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
const practiceName = 'practice';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/practice',
    name: practiceName,
    component: RouterView,
    meta: {
      title: '练习',
      icon: 'icon-externa-link',
    },
    children: [
      {
        path: '/her',
        name: 'her',
        meta: {
          title: 'demo',
          icon: 'icon-externa-link',
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/her/index.vue'),
      },
    ],
  },
];

export default routes;
