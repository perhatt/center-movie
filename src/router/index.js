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
          redirect: "/user/recent",
          component: () => import("@/views/user/Index.vue"),
          children:[
            {
              path:'/user/recent',
              name:'recent',
              component:() => import("@/views/user/Recent.vue"),
            },{
              path:'/user/collect',
              name:'collect',
              component:() => import("@/views/user/Collect.vue"),
            },{
              path:'/user/order',
              name:'order',
              component:() => import("@/views/user/Order.vue"),
            }
          ]
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
          path:"/login/account",
          name:"phone",
          component:() => import("@/views/login/Account.vue"),
          redirect:"/login/account/pwd",
          children:[
            {
              path:"/login/account/pwd",
              name:"pwd",
              component:() => import("@/views/login/Pwd.vue"),
            },{
              path:"/login/account/code",
              name:"email",
              component:() => import("@/views/login/Code.vue"),
            }
          ]
        }
      ]
    }
  ],
});

export default router;
