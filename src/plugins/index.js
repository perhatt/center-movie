import Icon from "@/components/Icon.vue";
import router from "@/router";
import { createPinia } from "pinia";
const pinia = createPinia();

export function registerPlugins(app) {
  // 全局组件注册
  app.component("Icon", Icon);
  app.use(router);
  app.use(pinia);
}
