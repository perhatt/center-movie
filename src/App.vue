<script setup>
  import Navbar from "./components/Navbar.vue";
  import Menu from "./components/Menu.vue";
  import Dialog from "./components/Dialog.vue";
</script>

<template>
  <div
    class="w-screen h-screen fixed flex items-center justify-center overflow-hidden"
  >
    <Menu></Menu>
    <div class="flex-1 h-full flex flex-col relative">
      <Navbar></Navbar>
      <div class="w-full h-full overflow-y-scroll relative">
        <router-view></router-view>
        <Dialog></Dialog>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
