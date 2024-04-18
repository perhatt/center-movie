<script setup>
  import PlayNavbar from "@/components/play/Nav.vue";
  import Player from "@/components/play/Player.vue";
  import RightVideoList from "@/components/play/RightList.vue";
</script>
<template>
  <div class="flex flex-col w-full h-screen fixed">
    <PlayNavbar name="最豪赘婿：龙王殿" class="z-50" />
    <div class="w-full flex-1 flex">
      <Player
        url="http://play.akax.cn/play?vid=wxv_1783130407513751560"
      />
      <!-- <RightVideoList /> -->
    </div>
  </div>
</template>
