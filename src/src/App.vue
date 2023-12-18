<template>
    <div>FullName: John Doe</div>
    {{ user }}
</template>

<script setup lang="ts">
import { reactive } from "vue";

const user = reactive({
    firstName: "John",
    lastName: "Doe",
    age: 25,
});
</script>

<style scoped></style>
