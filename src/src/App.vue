<template>
    <div>Count: {{ count }}</div>
    <button @click="count++">Add Count</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref<number>(0);
</script>

<style scoped></style>
