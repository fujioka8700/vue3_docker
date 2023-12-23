<template>
    <div>
        <h1>fetch関数</h1>
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface User {
    id: number;
    name: string;
}

const users = ref<User[]>([]);

const fetchUsers = async (): Promise<void> => {
    const res: Response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    users.value = await res.json();
};

fetchUsers();
</script>

<style scoped></style>
