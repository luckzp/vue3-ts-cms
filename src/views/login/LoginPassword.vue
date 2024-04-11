<template>
    <a-form :model="formState" name="basic" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" autocomplete="off">
        <a-form-item label="账号" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 5, span: 19 }">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 5, span: 19 }">
            <a-button type="primary" @click="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

interface FormState {
    username: string;
    password: string;
    remember: boolean;
}

const formState = reactive < FormState > ({
    username: '',
    password: '',
    remember: true,
});
const submit = () => {
    localStorage.setItem('username', formState.username);
    console.log('Success:');
};

</script>