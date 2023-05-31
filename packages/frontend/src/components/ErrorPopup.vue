<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{ message: string }>();
const emit = defineEmits<{
    (e: 'close'): void;
}>();
</script>

<template>
    <div class="popup">
        <div class="popup-content">
            <p>{{ message }}</p>
            <button @click="emit('close')">Close</button>
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: #fff;
    color: black;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
}
</style>



