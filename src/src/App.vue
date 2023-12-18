<template>
    <div>
        <HelloWorld msg="Hello" :user="user" @changeName="changeName" />
    </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

export type User = {
    firstName: string;
    lastName: string;
    age: number;
};

const user = ref<User>({
    firstName: "John",
    lastName: "Doe",
    age: 25,
});

const changeName = (firstName: string) => {
    user.value.firstName = firstName;
};
</script>

<style scoped></style>
