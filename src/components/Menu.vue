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
    class="w-fit h-full flex flex-col items-end pt-1 gap-1 px-1 relative bg-[rgb(44,45,47)] rounded-r-2xl"
  >
    <router-link
      :to="item.path"
      active-class="active_class"
      class="size-14 rounded-2xl flex flex-col items-center justify-center duration-100 router_class select-none"
      v-for="(item, index) in menu"
      :key="index"
    >
      <Icon :name="item.icon" size="20" stroke-width="2.5"></Icon>
    </router-link>
    <div class="right_after"></div>
  </div>
</template>
<style>
  .right_after {
    position: absolute;
    right: -2px;
    width: 2px;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent,
      #333,
      transparent
    );
  }
  .router_class {
    color: #58595a;
    cursor: pointer;
  }
  .active_class {
    border-spacing: 0.25rem 0.25rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: solid 3px #343436;
  }
</style>
