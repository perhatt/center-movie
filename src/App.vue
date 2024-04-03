<script setup>
  import Navbar from "./components/Navbar.vue";
  import Menu from "./components/Menu.vue";
  import Dialog from "./components/Dialog.vue";
  import { ref } from "vue";  
  const scrollPosition = ref(0);  
    const maxScrollOpacity = 1; 
    const maxScroll = 500; 
  // 滚动处理函数  
  const handleScroll = (e) => {  
    scrollPosition.value = e.srcElement.scrollTop
    const opacity = Math.min(scrollPosition.value / maxScroll, maxScrollOpacity);
    console.log(opacity);
    return `rgba(255,0,0,${opacity})`;
  };  
</script>

<template>
  <div
    class="w-screen h-screen fixed flex items-center justify-center overflow-hidden"
  >
    <Menu></Menu>
    <div class="flex-1 h-full flex flex-col relative">
      <Navbar :class="handleScroll"></Navbar>
      <div class="w-full h-full overflow-y-scroll relative" @scroll="handleScroll($event)">
        <router-view></router-view>
        <Dialog></Dialog>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
.ripple-button {  
  position: relative;  
  //display: inline-block;   
  overflow: hidden;
  
  &::before {  
    content: "";  
    position: absolute;  
    top: 50%;  
    left: 50%;  
    width: 0;  
    height: 0;  
    border-radius: 50%;  
    background: rgba(#fdaa7d, 0.9);  
    opacity: 0;  
    transform: translate(-50%, -50%);  
    transition: all 0.1s ease;  
  }  
  
  &:active::before {  
    width: 120%;  
    height: 120%;  
    opacity: 1;  
  }  
}
</style>
