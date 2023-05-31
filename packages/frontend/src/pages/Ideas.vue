<script setup lang="ts">
import { ref } from 'vue';
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { Idea } from '../idea';
import Loader from '../components/Loader.vue';
import IdeaList from '../components/IdeaList.vue';
import SubmitIdeaForm from '../components/SubmitIdeaForm.vue';
import ErrorPopUp from '../components/ErrorPopup.vue';

const queryClient = useQueryClient();

// When fetching ideas from backend, they need a little post-processing
const processIdeas = (
  ideas: (Omit<Idea, 'submittedAt'> & { submittedAt: string })[]
) =>
  ideas.map((d) => ({
    ...d,
    submittedAt: new Date(d.submittedAt),
  }));

// Query for fetching ideas from backend
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['getIdeas'],
  queryFn: (): Promise<Idea[]> =>
    fetch(`http://localhost:3000/ideas`)
      .then((res) => res.json())
      .then(processIdeas),
});

const { mutate: submitIdea } = useMutation({
  mutationKey: ['submitIdea'],
  mutationFn: (newIdea: Omit<Idea, 'submittedAt'>) =>
    fetch(`http://localhost:3000/ideas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea),
    })
      .then(async res => {
        const response = await res.json()
        if (!res.ok) {
          throw response.text
        }
        formRef.value.resetInputs()
        return response
      })
      .then(processIdeas)
      .then(data => queryClient.setQueryData(['getIdeas'], data))
      .catch(error => {
        showPopup.value = true
        errorMessage.value = error
      }),
});

const showPopup = ref(false);
const errorMessage = ref('');
const formRef = ref(null);

const submitForm = (newIdea: Omit<Idea, 'submittedAt'>) => {
  // console.log(newIdea);

  if (!newIdea.submittedBy) {
    showPopup.value = true
    errorMessage.value = 'Provide your name please!'
    return
  }
  if (!newIdea.content) {
    showPopup.value = true
    errorMessage.value = 'Provide your wonderful idea!'
    return
  }
  if (newIdea.content.length < 10 || newIdea.content.length > 400) {
    showPopup.value = true
    errorMessage.value = 'Sorry but your idea must be between 10 to 400 characters!'
    return
  }

  submitIdea(newIdea)
}

const hidePopup = () => {
  showPopup.value = false;
  errorMessage.value = '';
};

</script>

<template>
  <h1>Ideas</h1>
  <h2>Submit your own!</h2>
  <SubmitIdeaForm ref="formRef" @submitIdea="submitForm" />

  <h2>Current ideas</h2>
  <Loader v-if="isLoading" />

  <article v-else-if="isError">{{ error }}</article>

  <IdeaList v-else :ideas="data ?? []" />

  <ErrorPopUp v-if="showPopup" :message="errorMessage" @close="hidePopup" />
</template>
