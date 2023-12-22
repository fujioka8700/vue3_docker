<template>
    <div>
        <HelloWorld msg="Hello" :user="user" @changeName="changeName" />
    </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

export interface User {
    firstName: string;
    lastName: string;
}

const user = ref<User>({
    firstName: "Suzuki",
    lastName: "Kenta",
});

const changeName = (firstName: string): void => {
    user.value.firstName = firstName;
};
</script>

<style scoped></style>
