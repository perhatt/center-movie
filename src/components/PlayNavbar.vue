<script setup>
  import Button from "./Button.vue";
  const closeWindow = () => {
    ipcRenderer.send("close-video-window");
  };
  const maxMize = () => {
    ipcRenderer.send("video-maximize");
  };
  const miniMize = () => {
    ipcRenderer.send("video-minimize");
  };
  const props = defineProps({
    name: String,
  });
</script>
<template>
  <div class="w-full h-10 flex items-center gap-2 px-2 bg-[rgb(30,32,34)]">
    <div class="flex-1 flex">
      <div
        class="h-6 px-1 flex items-center justify-center bg-red-500 text-sm rounded-md text-white cursor-pointer"
      >
        主界面
      </div>
      <div
        class="flex-1 flex items-center justify-center drag text-sm select-none"
      >
        {{ props.name }}
      </div>
    </div>
    <div class="flex flex-row-reverse">
      <Button icon="X" @click="closeWindow"></Button>
      <Button icon="Maximize" @click="maxMize"></Button>
      <Button icon="Minus" @click="miniMize"></Button>
    </div>
  </div>
</template>
