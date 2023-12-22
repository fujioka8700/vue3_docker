<template>
    <div>
        <input type="text" ref="input" v-model="name" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const name = ref<string>("田中");
const input = ref<HTMLInputElement | undefined>();

onMounted(() => {
    input.value?.focus();
    console.log(input.value?.value);
});

export type funcType = <T>(val: T) => void;
const hogefunc: funcType = <T>(val: T): void => {
    console.log(typeof val);
};

hogefunc("hello");
hogefunc(100);

import "./sample";
</script>

<style scoped></style>
