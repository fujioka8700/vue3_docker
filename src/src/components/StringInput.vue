<template>
    <div>
        <input ref="input" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const input = ref();

onMounted(() => {
    input.value.focus();
});
</script>

<style scoped></style>
