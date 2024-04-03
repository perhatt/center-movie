<script setup>
import { ref } from "vue";
const menu = ref([
  {
    icon: "UserRound",
    lebal: "用户",
    path: "/user",
  },
  {
    icon: "Home",
    lebal: "首页",
    path: "/",
  },
]);
</script>

<template>
  <div
    class="w-fit h-full flex flex-col items-end pt-10 gap-1 px-2 relative  rounded-r-2xl"
  >
    <router-link
      :to="item.path"
      active-class="active_class"
      class="size-12 rounded-full flex flex-col items-center justify-center  router_class select-none"
      v-for="(item, index) in menu"
      :key="index"
    >
      <Icon :name="item.icon" size="20" stroke-width="2.5"></Icon>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.router_class {
  color: #58595a;
  cursor: pointer;
}
.active_class {
  background-color: var(--main-color);
  color: #fff;
}
</style>
