<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <p class="text-3xl text-bold">后台管理系统</p>
    <a-tabs v-model:activeKey="activeKey" centered class="mt-6  w-[360px]">
      <a-tab-pane key="1" tab="密码登录">
        <LoginPassword />
      </a-tab-pane>
      <a-tab-pane key="2" tab="验证码登录">
        <LoginPhone />
      </a-tab-pane>
    </a-tabs>
    <!-- <h1>Count: {{ count }}</h1>
    <button @click="incrementCount">Increment</button> -->
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia'
// import { useCounterStore } from '@/strore/store'
import { ref } from 'vue';
import LoginPassword from './login/LoginPassword.vue';
import LoginPhone from './login/LoginPhone.vue';
const activeKey = ref('1');

// const counterStore = useCounterStore()

// const { count } = storeToRefs(counterStore)

// const count = ref<number>(counterStore.count)
// const incrementCount = () => {
//   counterStore.increment()
// }
</script>
