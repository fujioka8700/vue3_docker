<template>
    <div>FullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <div>{{ fullName }}</div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

type User = {
    firstName: string;
    lastName: string;
    age: number;
};

const user = reactive<User>({} as User);

user.firstName = "John";
user.lastName = "Doe";
user.age = 25;

const fullName = computed<string>(() => `${user.firstName} ${user.lastName}`);

const changeName: (name: string) => void = (name: string): void => {
    user.firstName = name;
};

changeName("Jane");
</script>

<style scoped></style>
