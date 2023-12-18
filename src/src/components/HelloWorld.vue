<script setup lang="ts">
import type { User } from "../App.vue";
const emit = defineEmits<{
    (event: "changeName", firstName: string): void;
}>();

interface Props {
    msg: string;
    user: User;
}
const props = defineProps<Props>();

const changeName = () => {
    emit("changeName", "Jane");
};
</script>

<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <button @click="changeName">Change name</button>
</template>
