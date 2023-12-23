<template>
    <div>x :{{ x }}</div>
    <div>y :{{ y }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const x = ref<number>(0);
const y = ref<number>(0);

const handleMouseMove = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
};

onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped></style>
