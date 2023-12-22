<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
</template>

<script setup lang="ts">
import type { User } from "../App.vue";

interface Props {
    msg: string;
    user: User;
}

defineProps<Props>();
</script>

<style scoped></style>
