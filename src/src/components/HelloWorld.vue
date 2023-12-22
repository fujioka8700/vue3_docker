<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <button @click="changeName">Change name</button>
</template>

<script setup lang="ts">
import type { User } from "../App.vue";

interface Props {
    msg: string;
    user: User;
}

defineProps<Props>();

const emit = defineEmits<{
    (event: "changeName", firstName: string): void;
}>();

const changeName = () => {
    emit("changeName", "鈴木");
};
</script>

<style scoped></style>
