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
      <Input
        type="password"
        v-model:value="formState.password"
        class="h-12"
        placeholder="请输入你的密码"
      />
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
import {
  Input,
  Form,
  FormItem,
  Button,
  InputGroup,
  RadioGroup,
  RadioButton,
} from "ant-design-vue";
const formRef = ref();
const formState = reactive({
  username: "",
  password: "",
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
  //阻止多次运行
  if (getCodeBtnValue.value !== "获取验证码") return;
  if (formState.username === "") return;
  let minut = 5;
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
