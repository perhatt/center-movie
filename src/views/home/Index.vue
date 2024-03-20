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
</script>
<template>
  <Banner :imgList="imgList"></Banner>
  <list />
</template>
