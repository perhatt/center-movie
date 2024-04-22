import { registerPlugins } from "@/plugins/index.js";
// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";

// Style
import "./style.css";
import 'ant-design-vue/dist/reset.css';
// Mount
const app = createApp(App);
registerPlugins(app);
app.mount("#app");
