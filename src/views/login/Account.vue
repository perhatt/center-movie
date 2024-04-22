<template>
  <div class="w-full px-10">
    <div class="mb-6">
      <radio-group @change="changeLoginType" v-model:value="loginType">
        <radio-button value="0">密码登录</radio-button>
        <radio-button value="1">验证码登录</radio-button>
      </radio-group>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import { RadioGroup, RadioButton } from "ant-design-vue";
const loginType = ref("0");
const changeLoginType = () => {
  if (route.path == "/login/account/pwd") {
    loginType.value = "1";
    router.push("/login/account/code");
  } else {
    loginType.value = "0";
    router.push("/login/account/pwd");
  }
};
</script>
