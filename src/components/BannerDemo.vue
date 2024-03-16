<template>
  <div class="w-full h-96 relative overflow-hidden z-0">
    <!-- left btn -->
    <div
      class="absolute left-0 top-0 h-full w-2/6 bg-gradient-to-l from-transparent to-[#111214] flex items-center z-50"
    >
      <Button @click="prev" icon="ChevronLeft" class="ml-2"></Button>
    </div>
    <!-- right btn -->
    <div
      class="absolute right-0 top-0 h-full w-2/6 bg-gradient-to-r from-transparent to-[#111214] flex items-center justify-end z-50"
    >
      <Button @click="next" icon="ChevronRight" class="mr-2"></Button>
    </div>
    <!-- 指示灯 -->
    <div
      class="w-full h-24 absolute right-0 bottom-0 flex items-end pb-4 justify-center gap-1 z-50 bg-gradient-to-b from-transparent to-[#111214]"
    >
      <div
        @click="goToSlide(index)"
        :class="{
          'w-6 bg-fuchsia-300': currentIndex === index,
          'bg-white/40': currentIndex !== index,
        }"
        class="size-3 rounded-full duration-100 ease-out cursor-pointer"
        v-for="(item, index) in imgList"
        :key="index"
      ></div>
    </div>

    <!-- 照片区域 -->
    <transition name="slide-fade" mode="out-in">
      <img
        v-if="currentIndex >= 0 && currentIndex < imgList.length"
        key="current-image"
        class="absolute w-full h-full object-cover transition-opacity duration-500"
        :src="imgList[currentIndex].imgUrl"
        @mouseenter="changeBanner"
        @mouseleave="startLoop"
      />
    </transition>
  </div>
</template>

<script>
  import Button from "./Button.vue";
  export default {
    // ...
    data() {
      return {
        currentIndex: 0,
        looping: true, // 是否开启无限轮播
        // 其他数据...
      };
    },
    components: { Button },
    props: ["imgList"],
    methods: {
      prev() {
        this.currentIndex =
          (this.currentIndex - 1 + this.imgList.length) % this.imgList.length;
      },
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.imgList.length;
      },
      changeBanner() {
        // 停止自动播放逻辑...
      },
      startLoop() {
        // 开始自动播放逻辑...
        this.next();
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
    },
    // CSS 动画样式
    computed: {
      slideFadeEnterClass() {
        return "opacity-0 translate-x-full";
      },
      slideFadeEnterActiveClass() {
        return "opacity-100 translate-x-0 transition-transform duration-500 ease-in-out";
      },
      slideFadeLeaveClass() {
        return "opacity-100 translate-x-0";
      },
      slideFadeLeaveActiveClass() {
        return "opacity-0 translate-x-full transition-transform duration-500 ease-in-out";
      },
    },
  };
</script>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    will-change: transform, opacity;
  }
</style>
