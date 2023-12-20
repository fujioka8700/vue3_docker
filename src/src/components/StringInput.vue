<template>
    <div>
        <input ref="input" v-model="name" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const name = ref<string>("John");
const input = ref<HTMLInputElement | undefined>();

onMounted(() => {
    input.value?.focus();
    console.log(input.value?.value);
});
</script>

<style scoped></style>
