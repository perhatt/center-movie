<template>
  <div class="mt-12 cursor-pointer text-center text-xl" @click="openLoginWindow">登录</div>
</template>
<script setup>
const openLoginWindow=()=>{
  console.log(111);
  window.ipcRenderer.send('open-login-window')
}
</script>