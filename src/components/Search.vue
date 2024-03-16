<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const value = ref();
  const serach = () => {
    router.push({
      name: "search",
      query: { q: value.value },
    });
  };
</script>

<template>
  <div
    class="w-56 h-9 border-solid border-2 rounded-xl flex border-slate-400 backdrop-blur-sm bg-black/20"
  >
    <input
      @keydown.enter="serach"
      v-model="value"
      type="text"
      class="flex-1 outline-none border-none border-transparent bg-transparent text-slate-300 placeholder:text-slate-300 px-2 font-bold text-sm"
      placeholder="请输入电影名"
    />
  </div>
</template>
