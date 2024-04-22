<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-1 w-full flex pt-16">
      <div class="w-48 h-full flex flex-col items-center pt-2 gap-6">
        <div
          class="w-40 h-48 rounded-xl flex flex-col items-center justify-center gap-1"
        >
          <img
            class="size-32 rounded-full"
            src="https://picsum.photos/200/200"
            alt=""
          />
          <div class="w-36 h-10 flex items-center justify-center gap-2">
            <span class="text-white max-w-28 truncate">Username2</span>
            <div
              @click="editVisible = true"
              class="size-8 rounded-md bg-white/10 text-sm text-white flex items-center justify-center cursor-pointer hover:bg-white/20"
            >
              <Icon name="SquarePen" :size="16"></Icon>
            </div>
          </div>
        </div>
        <div class="flex-1 w-36 select-none flex flex-col gap-2 text-gray-400">
          <RouterLink
            :to="i.path"
            v-for="(i, index) in leftRouter"
            :key="index"
            active-class="bg-white/10 text-white"
            class="w-full h-10 rounded-xl flex items-center gap-1 hover:bg-white/10 px-2 hover:text-white cursor-pointer text-md"
          >
            <Icon :name="i.icon" :size="18" />
            {{ i.name }}
          </RouterLink>
        </div>
      </div>
      <div class="flex-1 h-full">
        <RouterView></RouterView>
      </div>
      <Modal
        theme="dark"
        v-model:open="editVisible"
        :maskClosable="false"
        centered
        @ok="handleUserInfo"
        width="300px"
        :footer="null"
        :closable="false"
      >
        form 表单
      </Modal>
    </div>
  </div>
</template>
<script setup>
import { Modal } from "ant-design-vue";
import { ref } from "vue";
const editVisible = ref(false);
const leftRouter = ref([
  {
    name: "最近观看",
    path: "/user/recent",
    icon: "Clock",
  },
  {
    name: "我的收藏",
    path: "/user/collect",
    icon: "Star",
  },
  {
    name: "我的订单",
    path: "/user/order",
    icon: "ClipboardList",
  },
]);
const handleUserInfo = () => {
  editVisible.value = false;
};
</script>
<style>
.ant-modal-content {
  background-color: #333 !important;
  color: #eee;
}
</style>
