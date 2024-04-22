<script setup>
import { ref } from "vue";
const menu = ref([
  {
    icon: "UserRound",
    lebal: "我的",
    path: "/user",
  },
  {
    icon: "Home",
    lebal: "首页",
    path: "/home",
  },
]);
</script>

<template>
  <div class="w-fit h-full flex flex-col items-end pt-10 gap-2 px-2 relative">
    <router-link
      :to="item.path"
      v-for="(item, index) in menu"
      :key="index"
      class="size-14 flex items-center justify-center rounded-full text-gray-200 hover:bg-white/10"
      active-class="bg-white/10 text-white border border-spacing-0.5 border-white/10 text-[var(--main-color)]"
    >
      <Icon :name="item.icon" :size="22" :stroke-width="2.5"></Icon>
    </router-link>
  </div>
</template>
