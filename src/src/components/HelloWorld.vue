<script setup lang="ts">
import type { User } from "../App.vue";
interface Props {
    msg: string;
    user: User;
}
const props = defineProps<Props>();

const changeName = () => {
    props.msg = "hoge";
    console.log(props.msg);
};
</script>

<template>
    <div>{{ msg }}</div>
    <div>fullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <button @click="changeName">Change name</button>
</template>
