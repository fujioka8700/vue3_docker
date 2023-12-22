<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <button @click="changeName">Change name</button><br />
    <input type="text" v-model="firstName" /><br />
    <button @click="newChangeName">New Change name</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

const newChangeName = () => {
    emit("changeName", firstName.value);
};

const firstName = ref<string>("");
</script>

<style scoped></style>
