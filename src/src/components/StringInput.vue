<template>
    <div>
        <input type="text" ref="input" v-model="name" />
        <a ref="ahref" href="https://google.com">Google</a>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const name = ref<string>("John");
const input = ref<HTMLElement | null>(null);
const ahref = ref<HTMLAnchorElement | null>(null);

onMounted(() => {
    input.value?.focus();
    console.log(ahref.value?.href);
});
</script>

<style scoped></style>
