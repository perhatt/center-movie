<script setup>
  import PlayNavbar from "@/components/PlayNavbar.vue";
  import VideoPlayer from "@/components/VideoPlayer.vue";
  import RightVideoList from "@/components/RightVideoList.vue";
</script>
<template>
  <div class="flex flex-col w-full h-screen fixed">
    <PlayNavbar name="最豪赘婿：龙王殿" class="z-50" />
    <div class="w-full flex-1 flex">
      <VideoPlayer
        url="http://play.akax.cn/play?vid=wxv_1783130407513751560"
      ></VideoPlayer>
      <RightVideoList />
    </div>
  </div>
</template>
