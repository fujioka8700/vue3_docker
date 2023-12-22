<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
</template>

<script setup lang="ts">
import type { User } from "../App.vue";

defineProps<{
    msg: string;
    user: User;
}>();
</script>

<style scoped></style>
