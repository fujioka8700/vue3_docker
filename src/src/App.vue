<template>
    <div>FullName: John Doe</div>
    {{ user }}
</template>

<script setup lang="ts">
import { reactive } from "vue";

type User = {
    firstName: string;
    lastName: string;
    age: number;
};

const user = reactive({} as User);
user.firstName = "John";
user.lastName = "Doe";
user.age = 25;
</script>

<style scoped></style>
