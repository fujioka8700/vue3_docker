<template>
    <div>FullName: John Doe</div>
    <div>{{ user }}</div>
    <div>{{ fullName }}</div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

type User = {
    firstName: string;
    lastName: string;
    age: number;
};

const user: User = reactive({
    firstName: "John",
    lastName: "Doe",
    age: 25,
});

const fullName = computed<string>(() => `${user.firstName} ${user.lastName}`);

const changeName = (): void => {
    user.firstName = "Jane";
};

changeName();
</script>

<style scoped></style>
