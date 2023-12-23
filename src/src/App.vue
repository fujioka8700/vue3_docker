<template>
    <div>
        <input
            type="text"
            ref="input"
            @input="handleChange($event, 'event型の確認')"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const input = ref<HTMLInputElement | undefined>();

onMounted(() => {
    input.value?.focus();
});

const handleChange = (event: Event, comment: string) => {
    console.log((event.target as HTMLInputElement).value);
    console.log(comment);
};
</script>

<style scoped></style>
