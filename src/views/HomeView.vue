<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="incrementCount">Increment</button>
  </div>
  <a-flex wrap="wrap" gap="small">
    <a-button v-for="item in new Array(24)" :key="item" type="primary">Button</a-button>
  </a-flex>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/strore/store'

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)

// const count = ref<number>(counterStore.count)
const incrementCount = () => {
  counterStore.increment()
}
</script>
