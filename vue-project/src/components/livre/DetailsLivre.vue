<template>
    <div>
      <h1>Livre de {{livre.titre}} {{ livre.auteur }}</h1>
      <p>Date: {{livre.date_publication }}</p>
      <p>Date de naissance: {{ livre.genre}}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import useLivre from '../../services/serviceLivre';
  
  const user = ref({});
  const route = useRoute();
  const { id } = route.params;
  const { getLivreParId } = useLivre();
  
  onBeforeMount(async () => {
    if (id) {
      try {
        livre.value = await getLivreParId(id);
      } catch (err) {
        console.error(err);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  /* Styles spécifiques au composant */
  </style>
  