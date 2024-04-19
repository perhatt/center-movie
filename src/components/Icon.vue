<script setup>
  import { computed } from "vue";
  import * as icons from "lucide-vue-next";

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    size: Number,
    color: String,
    defaultClass: String,
  });

  const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    class="bg-transparent"
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="2.5"
    :default-class="defaultClass"
  />
</template>
