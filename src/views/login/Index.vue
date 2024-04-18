<script setup>
 const closeWindow = () => {
    window.ipcRenderer.send('close-login-window')
  };
</script>
<template>
    <div class="w-full h-screen bg-gray-400 rounded-xl" >
        <div class="size-10 rounded-xl bg-red-300 flex items-center justify-center cursor-pointer" @click="closeWindow">
            <Icon name="X" class=" text-white"  :stroke-width="2.5"/> 
        </div>
    </div>
</template> 


