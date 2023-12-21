<template>
    <div>
        <input type="text" @change="handleChange" />
    </div>
</template>

<script setup lang="ts">
const handleChange = (event) => {
    console.log(event.target.value);
};
</script>

<style scoped></style>
