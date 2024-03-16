<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  lebal: String,
});
</script>
<template>
  <div
    class="rounded-full size-9 flex items-center justify-center group cursor-pointer hover:border-solid hover:border-2 hover:border-white/10 hover:bg-white/10 hover:border-spacing-1 duration-100 select-none"
  >
    <Icon
      :name="icon"
      size="20"
      stroke-width="3"
      class="text-[#58595A] group-hover:text-white group-hover:font-bold"
    ></Icon>
    <span class="font-bold text-sm text-[#58595A] group-hover:text-white">{{
      lebal
    }}</span>
  </div>
</template>