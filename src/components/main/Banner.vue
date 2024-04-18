<script setup>
  import { onMounted, ref } from "vue";
  import Button from "../Button.vue";
  const currentIndex = ref(0);
  const loadig = ref(true);
  const props = defineProps(["imgList"]);
  const instFun = (index) => {
    currentIndex.value = index;
  };
  const Prev = () => {
    currentIndex.value =
      (currentIndex.value - 1 + props.imgList.length) % props.imgList.length;
  };
  const Next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.imgList.length;
  };
  // 指示器
  let interval;
  // 鼠标移入事件
  // 鼠标移入时清除计时器
  const changeBanner = () => {
    clearInterval(interval);
  };
  // 鼠标移出重新赋值计时器
  const startLoop = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      Next();
    }, 2000);
  };
  onMounted(() => {
    startLoop();
  });
  const load = () => {
    loadig.value = false;
  };
</script>
<template>
  <div
    class="w-full h-96 relative overflow-hidden z-0"
    @mouseenter="changeBanner"
    @mouseleave="startLoop"
  >
    <!-- left btn -->
    <div
      class="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-l from-transparent to-[var(--bg-color)] flex items-center z-50"
    >
      <Button @click="Prev" icon="ChevronLeft" class="ml-2"></Button>
    </div>
    <!-- right btn -->
    <!-- bg-gradient-to-r from-transparent to-[var(--bg-color)] -->
    <div
      class="absolute right-0 top-0 h-full w-2/6 flex items-center justify-end z-50"
    >
      <Button @click="Next" icon="ChevronRight" class="mr-2"></Button>
    </div>
    <!-- 指示灯 -->
    <div
      class="w-full h-20 absolute right-0 bottom-0 flex items-end pb-4 justify-center gap-1 z-50 bg-gradient-to-b from-transparent to-[var(--bg-color)]"
    >
      <div
        @click="instFun(index)"
        :class="
          currentIndex == index ? 'w-6 bg-[var(--main-color)]' : ' bg-white/40'
        "
        class="size-3 rounded-full duration-100 ease-out cursor-pointer"
        v-for="(item, index) in imgList"
        :key="index"
      ></div>
    </div>
    <!-- 照片区域 -->
    <div
      class="absolute w-full h-full flex duration-75 transition-all ease-in-out"
      :style="`transform:translateX(${-currentIndex * 100}%);`"
    >
      <div
        class="w-full h-full flex-wrap shrink-0"
        v-for="item in imgList"
        :key="item"
      >
        <img
          @load="load"
          class="w-[100%] block h-[100%] top-0 left-0"
          :src="item.imgUrl"
          alt=""
        />
      </div>
      <!-- :todo 无限轮播 -->
    </div>
  </div>
</template>
