<script setup lang="ts">
import type { User } from "../App.vue";
defineProps<{
    msg: string;
    user: User;
}>();
</script>

<template>
    <div>{{ msg }}</div>
    <div>{{ `${user.firstName} ${user.lastName}` }}</div>
</template>
