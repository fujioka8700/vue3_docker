<template>
    <div>
        <input type="text" ref="input" @input="handleChange" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const input = ref<HTMLInputElement | undefined>();

onMounted(() => {
    input.value?.focus();
});

const handleChange = (event: Event) => {
    console.log((event.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
