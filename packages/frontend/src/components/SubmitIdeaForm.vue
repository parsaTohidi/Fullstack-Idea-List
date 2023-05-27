<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  submittedBy: '',
  content: '',
});

type FormData = typeof formData;

const emit = defineEmits<{
  (e: 'submitIdea', formData: FormData): void;
}>();

const resetInputs = function () {

  formData.value = {
    submittedBy: '',
    content: '',
  }
}
defineExpose({
  resetInputs
})
</script>

<template>
  <form v-on:submit.prevent="emit('submitIdea', formData)" class="submit-idea-form">
    <div class="field">
      <label for="submittedBy" class="label">Who are you?</label>
      <input type="text" name="submittedBy" id="submittedBy" v-model="formData.submittedBy" />
    </div>
    <div class="field">
      <label for="content" class="label">Your idea</label>
      <textarea type="text" name="content" id="content" v-model="formData.content"></textarea>
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
.submit-idea-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  border-bottom: 1px mintcream solid;
  padding: 20px;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  white-space: nowrap;
  text-align: start;
}

textarea {
  resize: none;
  min-height: 5lh;
}
</style>
