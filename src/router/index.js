import { createRouter, createWebHashHistory } from "vue-router";

//export router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
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
});

export default router;
