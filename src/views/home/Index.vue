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
const list = ref([
  {
    title: "恐怖之夜",
    tab: ["恐怖", "悬疑"],
    cover:
      "https://www.hdsay.net/Files/2014-08/1e523522313148f3b17e517484d7b242.jpg",
    introduce:
      "这部电影是一个扣人心弦的恐怖故事，讲述了一群人在恐怖之夜的遭遇。",
    lebal: "高清",
  },
  {
    title: "爱在日落时",
    tab: ["爱情片", "浪漫"],
    cover:
      "https://pica.zhimg.com/v2-215f5d2db6c74f5528351a7fb6844e55_720w.jpg",
    introduce:
      "这部电影是一个温馨感人的爱情故事，讲述了两个人在日落时分的相遇与相恋。",
    lebal: "高清",
  },
  {
    title: "科幻迷航",
    tab: ["科幻", "冒险"],
    cover:
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.bietX7MUYmoFzEowycZNlQHaKV?rs=1&pid=ImgDetMain",
    introduce:
      "这部电影是一个充满想象力的科幻冒险故事，带领观众探索未知的宇宙。",
    lebal: "高清",
  },
  {
    title: "沙丘2",
    tab: ["剧情", " 科幻 ", " 冒险"],
    cover:
      "https://doc-fd.zol-img.com.cn/t_s640x2000/g7/M00/0F/0C/ChMkLGWx9HSIJFhOAAEEx4q-jTMAAaAOgC9hHEAAQTf324.jpg",
    introduce:
      "电影《沙丘》为观众呈现了一段神秘而感人至深的英雄之旅。天赋异禀的少年保罗·厄崔迪（提莫西·查拉梅 饰）被命运指引，为了保卫自己的家族和人民，决心前往浩瀚宇宙间最危险的星球，开启一场惊心动魄的冒险。与此同时，各路势力为了抢夺这颗星球上一种能够释放人类最大潜力的珍贵资源而纷纷加入战场。最终，唯有那些能够战胜内心恐惧的人才能生存下去。",
    lebal: "高清",
  },
]);
</script>
<template>
  <Banner :imgList="imgList"></Banner>
  <div class="flex justify-around gap-2 w-full flex-wrap p-10">
    <div v-for="i in list" :key="i">
      <list :list="i" />
    </div>
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
