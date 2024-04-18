<script setup>
  import { ref } from "vue";
  const isRightList = ref(false);
  const hiddenRightList = () => {
    isRightList.value = !isRightList.value;
  };
</script>
<template>
  <div
    :class="isRightList ? 'w-72' : 'w-0'"
    class="h-full  relative duration-100"
    >
    <div class="h-full w-full bg-red-400"></div>
  <div class="absolute -left-6 w-6 h-full flex items-center bg-red-400">
    <div 
    class="w-full h-12  rounded-l-xl flex items-center justify-center text-white cursor-pointer"
    @click="hiddenRightList"
    >
    <Icon :name="isRightList?'StepForward':'StepBack'" :size="20" :widstroke-width="3"/>
    
  </div>
    </div>
  </div>
</template>
