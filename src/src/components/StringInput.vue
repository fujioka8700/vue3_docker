<template>
    <div v-for="user in users" :key="user.id">
        {{ user.name }}
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
    };
}

const users: Ref<User[]> = ref([]);

const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    users.value = await res.json();
    return users.value;
};

fetchUsers();
</script>

<style scoped></style>
