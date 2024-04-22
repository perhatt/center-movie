<template>
  <Form ref="formRef" :model="formState">
    <form-item
      name="username"
      :rules="[{ required: true, message: '用户名为空!' }]"
    >
      <Input
        class="h-12"
        placeholder="请输入你的手机号"
        v-model:value="formState.username"
      />
    </form-item>
    <form-item>
      <input-group compact class="h-12">
        <Input
          type="text"
          :maxlength="6"
          v-model:value="formState.code"
          class="h-12"
          style="width: calc(100% - 100px)"
          placeholder="请输入6位验证码"
        />
        <Button
          class="h-12"
          type="default"
          style="width: 100px"
          @click="getCode"
          >{{ getCodeBtnValue }}</Button
        >
      </input-group>
    </form-item>
    <form-item>
      <Button type="primary" class="w-full h-12" @click="onCheck"
        >登录/注册</Button
      >
    </form-item>
  </Form>
</template>
<script setup>
import { reactive, ref } from "vue";

import { Input, Form, FormItem, Button, InputGroup } from "ant-design-vue";
const formRef = ref();
const formState = reactive({
  username: "",
  code: "",
});
const onCheck = async () => {
  try {
    console.log("Success:", formState);
  } catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
};
const getCodeBtnValue = ref("获取验证码");
const getCode = () => {
  let minut = 60;
  getCodeBtnValue.value = minut + "s";
  let timer = setInterval(() => {
    minut--;
    getCodeBtnValue.value = minut + "s";
    if (minut <= 0) {
      clearInterval(timer);
      getCodeBtnValue.value = "获取验证码";
    }
  }, 1000);
};
</script>
