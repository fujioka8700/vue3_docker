<script setup lang="ts">
import type { User } from "../App.vue";
interface Props {
    msg: string;
    user: User;
}
defineProps<Props>();
</script>

<template>
    <div>{{ msg }}</div>
    <div>{{ `${user.firstName} ${user.lastName}` }}</div>
</template>
