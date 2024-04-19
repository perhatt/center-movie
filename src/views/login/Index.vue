<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const closeWindow = () => {
  window.ipcRenderer.send("close-login-window");
};
const routerPath = ref(0);
const switchingLoginMode = () => {
  if (route.path == "/login/wechat") {
    router.push("/login/phone");
    routerPath.value = 1;
  } else {
    router.push("/login/wechat");
    routerPath.value = 0;
  }
};
</script>
<template>
  <div class="relative w-full h-screen bg-[#292929]">
    <div class="w-full h-20 flex">
      <div class="flex-1 h-full drag flex items-center">
        <div
          @click="switchingLoginMode"
          class="size-20 flex items-center justify-center px-3 py-1.5 bg-blue-300/30 text-sm text-white no-drag rotate-45 -translate-x-10 -translate-y-10 overflow-hidden cursor-pointer"
        >
          <!-- {{ routerPath == 1 ? "微信" : "账号" }} -->
          <div class="-rotate-45 w-full h-full translate-x-10 mt-4 ml-4">
            <img
              class="size-12"
              v-if="routerPath == 1"
              src="@/assets/qr.svg"
              alt=""
            />
            <img class="size-12 mt-1" v-else src="@/assets/phone.svg" alt="" />
          </div>
        </div>
      </div>
      <div
        class="size-12 flex items-center justify-center cursor-pointer hover:text-white"
        @click="closeWindow"
      >
        <Icon name="X" />
      </div>
    </div>
    <router-view></router-view>
  </div>

  <!-- <div class="w-full h-16 flex items-center rounded-b-xl">  
      <div class="flex-1 h-full gap-2 flex items-center drag pl-2">
        <div
          class="h-10 bg-white/10 rounded-xl flex items-center justify-center text-white cursor-pointer no-drag duration-100"
          @click="handleCurrentIndex(index)"
          v-for="(i, index) in currentList"
          :key="i"
          :class="currentIndex === index ? 'bg-blue-400 px-2' : 'size-10'"
        >
          <Icon :name="i.icon" :size="20" :stroke-width="2.5" />
          <span
            class="text-sm pl-1"
            :class="currentIndex === index ? 'scale-100' : 'scale-0 hidden'"
            >{{ i.name }}</span
          >
        </div>
      </div>
      <div
        class="h-10 w-16 hover:text-white text-gray-200 rounded-full flex items-center justify-center cursor-pointer"
        @click="closeWindow"
      >
        <Icon name="X" :stroke-width="2.5" />
      </div>
    </div> -->
</template>
