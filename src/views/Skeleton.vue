<script setup>
  import Menu from "@/components/Menu.vue";
  import Navbar from "@/components/Navbar.vue";
  import { ref } from "vue";
  const scrollPosition = ref(0);
  const opacity = ref();
  // 滚动处理函数
  const handleScroll = (e) => {
    scrollPosition.value = e.srcElement.scrollTop;
    const maxScrollOpacity = 1;
    const maxScroll = 200;
    const value = Math.min(scrollPosition.value / maxScroll, maxScrollOpacity);
    opacity.value = Number(value.toFixed(2));
  };
</script>

<template>
  <div
    class="w-screen h-screen fixed flex items-center justify-center overflow-hidden"
  >
    <Menu></Menu>
    <div class="flex-1 h-full flex flex-col relative">
      <Navbar :style="`background-color:rgba(28,24,20,${opacity});`"></Navbar>
      <div
        class="w-full h-full overflow-y-scroll relative"
        @scroll="handleScroll($event)"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
