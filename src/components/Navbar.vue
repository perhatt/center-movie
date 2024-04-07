<script setup>
  import Search from "./Search.vue";
  import Button from "./Button.vue";
  const minimize = () => {
    ipcRenderer.send("minimize");
  };
  const toggleFullScreen = () => {
    ipcRenderer.send("maximize-window");
  };
  const closeApp = () => {
    ipcRenderer.send("close-app");
  };
</script>
<template>
  <div class="w-full h-12 flex items-center gap-2 px-2 absolute top-0 z-50">
    <Button icon="ChevronLeft" @click="this.$router.go(-1)"> </Button>
    <Button icon="ChevronRight" @click="this.$router.go(-1)"> </Button>
    <div class="flex-1 h-12 flex items-center flex-row-reverse gap-1">
      <!-- app控制 最小化关闭 -->
      <Button icon="X" @click="closeApp"></Button>
      <Button icon="Maximize" @click="toggleFullScreen"></Button>
      <Button icon="Minus" @click="minimize"></Button>
      <Button icon="AlignJustify"></Button>
      <div class="mx-4 w-[3px] h-4 bg-[#58595A] rounded-xl"></div>
      <!-- 搜索框 -->
      <Search></Search>
      <div class="drag flex-1 h-full"></div>
    </div>
  </div>
</template>
<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 1em #059860de);
  }
</style>
