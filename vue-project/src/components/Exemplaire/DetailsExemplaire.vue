<template>
    <div>
      <h1>exemplaire de {{exemplaire.etat}} {{exemplaire.localisation }}</h1>

    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import useExemplaire from '../../services/serviceExemplaire';
  
  const exemplaire = ref({});
  const route = useRoute();
  const { id } = route.params;
  const { getExemplaireParId } = useExemplaire();
  
  onBeforeMount(async () => {
    if (id) {
      try {
        exemplaire.value = await getExemplaireParId(id);
      } catch (err) {
        console.error(err);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  /* Styles spécifiques au composant */
  </style>
  