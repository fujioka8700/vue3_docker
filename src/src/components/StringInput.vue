<template>
    <div>
        <input type="text" @change="handleChange" />
    </div>
</template>

<script setup lang="ts">
const handleChange = (event: Event) => {
    console.log((event.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
