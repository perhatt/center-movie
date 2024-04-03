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
    v-for="(item, index) in menu"
    :key="index" class="size-11 flex items-center justify-center rounded-xl text-gray-200 hover:bg-white/10 " 
    active-class="bg-white/10 text-white border border-spacing-0.5 border-white/10 text-[var(--main-color)]" 
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
