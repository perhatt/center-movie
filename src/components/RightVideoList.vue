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
    class="h-full bg-red-300 relative duration-100"
  >
    <div class="absolute -left-6 w-6 h-full flex items-center">
      <div
        class="w-full h-12 bg-red-500 rounded-l-xl"
        @click="hiddenRightList"
      ></div>
    </div>
  </div>
</template>
