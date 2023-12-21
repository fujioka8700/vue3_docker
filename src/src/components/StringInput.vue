<template>
    <div>
        <input type="text" @change="handleChange($event, 'eventの型の確認')" />
    </div>
</template>

<script setup lang="ts">
const handleChange = (event: Event, comment: string) => {
    console.log((event.target as HTMLInputElement).value);

    console.log(comment);
};
</script>

<style scoped></style>
