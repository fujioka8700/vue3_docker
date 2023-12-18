<template>
    <div>FullName: John Doe</div>
    {{ user }}
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const user: User = reactive({
    firstName: "John",
    lastName: "Doe",
    age: 25,
});
</script>

<style scoped></style>
