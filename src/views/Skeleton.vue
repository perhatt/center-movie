<script setup>
import Menu from "@/components/main/Menu.vue";
import Navbar from "@/components/main/Nav.vue";
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
const handleScrollToTop = () => {
  const scrollToTop = document.getElementById("scroll");
  scrollToTop.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
        id="scroll"
      >
        <router-view></router-view>
        <div
          :class="opacity == 1 ? 'scale-100' : 'scale-0'"
          @click="handleScrollToTop"
          class="fixed right-4 bottom-4 size-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer duration-200 origin-center"
        >
          <Icon name="ChevronUp" />
        </div>
      </div>
    </div>
  </div>
</template>
