<template>
    <div>Count: {{ count }}</div>
    <button @click="count++">Add Count</button>
</template>

<script setup lang="ts">
const count = 0;
</script>

<style scoped></style>
