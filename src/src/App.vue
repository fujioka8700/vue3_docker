<template>
    <div>FullName: {{ `${user.firstName} ${user.lastName}` }}</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const user: {
    firstName: string;
    lastName: string;
    age: number;
} = reactive({
    firstName: "John",
    lastName: "Doe",
    age: 25,
});
</script>

<style scoped></style>
