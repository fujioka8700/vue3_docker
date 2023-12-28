<template>
  <div>
    <div>{{ count }}</div>
    <button
      data-test="btn"
      @click="count++"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Count Up
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
</script>

<style scoped></style>
