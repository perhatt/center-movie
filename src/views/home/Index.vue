<script setup>
import Banner from "@/components/Banner.vue";
import Button from "@/components/Button.vue";
import List from "@/components/List.vue";
import { ref } from "vue";
const imgList = ref([
  {
    imgUrl: "https://picsum.photos/1040/300?random=1",
    lebal: "wosivivivbisdv",
  },
  {
    imgUrl: "https://picsum.photos/1040/300",
    lebal: "qbufiwqfiwef",
  },
  {
    imgUrl: "https://picsum.photos/1040/300?random=4",
    lebal: "123456787654345y",
  },
]);
const list = ref({
    title: "恐怖之夜",
    tab: ["恐怖", "悬疑"],
    cover:
      "https://www.hdsay.net/Files/2014-08/1e523522313148f3b17e517484d7b242.jpg",
    introduce:
      "这部电影是一个扣人心弦的恐怖故事，讲述了一群人在恐怖之夜的遭遇。",
    lebal: "高清",
  });
</script>
<template>
  <Banner :imgList="imgList"></Banner>
  <div class="flex justify-around gap-5 w-full flex-wrap p-10">
    <list v-for="i in 12" :list="list" :key="i" />
  </div>

  <!-- 加载更多 -->
  <div class="w-full h-10 text-sm flex justify-center items-center mb-10">
    <div
      class="bg-white/10 rounded-xl cursor-pointer text-white flex items-center gap-1 px-2 py-1"
    >
      <Icon name="CirclePlay" size="14"></Icon>
      <p>加载更多...</p>
    </div>
  </div>
</template>
