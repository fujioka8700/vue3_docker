<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <input type="text" v-model="firstName" /><br />
    <button @click="newChangeName">New Change name</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { User } from "../App.vue";

interface Props {
    msg: string;
    user: User;
}

defineProps<Props>();

const emit = defineEmits<{
    (event: "changeName", firstName: Ref<string>): void;
}>();

const newChangeName = (): void => {
    emit("changeName", firstName);
};

const firstName = ref<string>("");
</script>

<style scoped></style>
