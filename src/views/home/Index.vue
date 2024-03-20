<script setup>
import Banner from "@/components/Banner.vue";
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
const list = ref([
  {
    title: "模拟标题xxxxx",
    tab: ["1121", "2121212", "12122121"],
    cover: "https://picsum.photos/224/288",
    introduce:
      "ofuwefewfwefwefwefwefwefwefweffweffwecfwe er ergregergergregergerwgre",
    lebal: "高清电影",
  },
  {
    title: "模拟标题xxxxx",
    tab: ["1121", "2121212", "12122121"],
    cover: "https://picsum.photos/224/288",
    introduce:
      "ofuwefewfwefwefwefwefwefwefweffweffwecfwe er ergregergergregergerwgre",
    lebal: "高清电影",
  },
  {
    title: "模拟标题xxxxx",
    tab: ["1121", "2121212", "12122121"],
    cover: "https://picsum.photos/224/288",
    introduce:
      "ofuwefewfwefwefwefwefwefwefweffweffwecfwe er ergregergergregergerwgre",
    lebal: "高清电影",
  },
  {
    title: "模拟标题xxxxx",
    tab: ["1121", "2121212", "12122121"],
    cover: "https://picsum.photos/224/288",
    introduce:
      "ofuwefewfwefwefwefwefwefwefweffweffwecfwe er ergregergergregergerwgre",
    lebal: "",
  },
]);
</script>
<template>
  <Banner :imgList="imgList"></Banner>
  <div class="flex gap-2 w-full flex-wrap justify-around p-10">
    <div v-for="i in list" :key="i">
      <list :list="i" />
    </div>
  </div>
</template>
