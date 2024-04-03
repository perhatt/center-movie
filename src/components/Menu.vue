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
      class="size-12 rounded-full  text-[var(--main-color)]  router_class select-none ripple-button flex items-center justify-center"
      v-for="(item, index) in menu"
      :key="index"
    >
      <Icon :name="item.icon" size="20" stroke-width="2.5"></Icon>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.active_class{
  background-color:rgba(#fdaa7d,0.1);
  color: var(--main-color);
}
</style>
