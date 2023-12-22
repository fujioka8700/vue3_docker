<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
// import type { User } from "../App.vue";
interface User {
    firstName: string;
    lastName: string;
}

interface Props {
    msg: string;
    user: User;
}
defineProps<Props>();

const emit = defineEmits<{
    (event: "changeName", firstName: Ref<string>): void;
}>();

const changeName = () => {
    emit("changeName", firstName);
};

const firstName = ref<string>("");
</script>

<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <input v-model="firstName" /><br />
    <button @click="changeName">Change name</button>
</template>
