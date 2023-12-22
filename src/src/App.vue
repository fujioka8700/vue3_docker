<template>
    <div>Count: {{ count }}</div>
    <button @click="count++">Add Count</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const count: Ref<number> = ref(0);
</script>

<style scoped></style>
