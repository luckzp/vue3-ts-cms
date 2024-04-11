<template>
    <a-form :model="formState" name="basic" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" autocomplete="off">
        <a-form-item label="手机号" name="phone" :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.phone" allow-clear placeholder="请输入手机号" @press-enter="submit">
                <template #prefix>
                    <MobileOutlined />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item label="验证码" name="msgCode" :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input v-model:value="formState.msgCode" allow-clear placeholder="请输入验证码" @press-enter="submit">
                <template #prefix>
                    <LockOutlined />
                </template>
                <template #suffix>
                    <a-button type="link" :loading="codeLoading" :disabled="isActive" @click="submit">
                        <template v-if="!isActive">发送验证码</template>
                        <template v-else>{{ resetCounter - counter }} 秒后重新获取</template>
                    </a-button>
                </template>
            </a-input> </a-form-item>

        <a-form-item :wrapper-col="{ offset: 5, span: 19 }">
            <a-button type="primary" @click="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useInterval } from '@vueuse/core';
import { LockOutlined, MobileOutlined } from '@ant-design/icons-vue';

interface MsgLogin {
    phone: string;
    msgCode: string;
}

const formState = reactive<MsgLogin>({
    phone: '',
    msgCode: ''
});
const resetCounter = 60;
const codeLoading = ref(false)

const { counter, pause, reset, resume, isActive } = useInterval(1000, {
    controls: true,
    immediate: false,
    callback(count) {
        if (count) {
            if (count === resetCounter) pause();
        }
    },
});

const submit = () => {
    codeLoading.value = true;

    localStorage.setItem('username', formState.phone);
    console.log('Success:');
    setTimeout(() => {
        reset();
        resume();
        codeLoading.value = false;
    }, 3000);
};

</script>