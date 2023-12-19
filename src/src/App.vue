<template>
    <div>
        <HelloWorld msg="Hello" :user="user" @changeName="changeName" />
        <StringInput />
    </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import StringInput from "./components/StringInput.vue";
import { ref } from "vue";
import type { Ref } from "vue";

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

const changeName = (firstName: Ref<string>) => {
    user.value.firstName = firstName.value;
};
</script>

<style scoped></style>
