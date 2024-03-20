<script setup>
const props = defineProps({
  list: String,
});
</script>

<template>
  <div
    class="w-56 h-80 rounded-xl relative group cursor-pointer overflow-hidden"
  >
    <img :src="props.list.cover" class="w-full h-full rounded-xl" alt="" />
    <div
      class="absolute top-72 lef-0 w-full h-36 bg-black/50 backdrop-blur-sm group-hover:top-44 transition-all duration-100 ease-out text-white flex flex-col px-2"
    >
      <p class="w-full truncate flex-wrap text-md leading-8 hover:underline">
        {{ props.list.title }}
      </p>
      <div class="w-full h-10 flex items-center gap-1">
        <div
          v-for="i in props.list.tab"
          :key="i"
          class="w-fit px-2 h-6 bg-white/10 rounded-xl text-xs flex items-center justify-center"
        >
          {{ i }}
        </div>
      </div>
      <p class="w-full line-clamp-3 overflow-hidden text-xs">
        {{ props.list.introduce }}
      </p>
    </div>
    <div
      v-if="props.list.lebal.length"
      class="absolute top-0 right-0 w-fit bg-red-500 px-2 py-1 text-xs text-white rounded-bl"
    >
      {{ props.list.lebal }}
    </div>
  </div>
</template>
