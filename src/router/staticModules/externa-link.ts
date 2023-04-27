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
      {
        path: '/wkdemo',
        name: 'wkdemo',
        meta: {
          title: '页面间传值',
          icon: 'icon-externa-link',
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/wkdemo/index.vue'),
      },
      {
        path: '/child1',
        name: 'child1',
        meta: {
          title: 'B页面',
          icon: 'icon-externa-link',
          hideInMenu: true,
          activeMenu: `wkdemo`,
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/wkdemo/child1/child1.vue'),
      },
      {
        path: '/grandson',
        name: 'grandson',
        meta: {
          title: 'C页面',
          icon: 'icon-externa-link',
          hideInMenu: true,
          activeMenu: `wkdemo`,
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard-welcome" */ '@/views/wkdemo/child1/grandson/grandson.vue'
          ),
      },
      {
        path: '/wkdemoassembly',
        name: 'wkdemoassembly',
        meta: {
          title: '组件间传值',
          icon: 'icon-externa-link',
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/wkdemoassembly/index.vue'),
      },
    ],
  },
];

export default routes;
