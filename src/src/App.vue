<template>
    <div>Count: {{ count }}</div>
    <button @click="count++">Add Count</button>
    <div>{{ user }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { UserType } from "./types";

const count: Ref<number> = ref<number>(0);

const user: UserType = { id: 10, name: "tarou" };
</script>

<style scoped></style>
