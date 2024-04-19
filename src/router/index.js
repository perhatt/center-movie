import { createRouter, createWebHashHistory } from "vue-router";

//export router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/home",
      component: () => import("@/views/Skeleton.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/Index.vue"),
        },
        {
          path: "/user",
          name: "user",
          component: () => import("@/views/user/Index.vue"),
        },
        {
          path: "/search",
          name: "search",
          component: () => import("@/views/search/Index.vue"),
        },
      ],
    },
    {
      path: "/play",
      name: "play",
      component: () => import("@/views/play/Index.vue"),
    },
    {
      path:"/login",
      name:"login",
      component:() => import("@/views/login/Index.vue"),
      redirect:"/login/wechat",
      children:[
        {
          path:"/login/wechat",
          name:"wechat",
          component:() => import("@/views/login/Wechat.vue"),
        },{
          path:"/login/phone",
          name:"phone",
          component:() => import("@/views/login/Phone.vue"),
        }
      ]
    }
  ],
});

export default router;
