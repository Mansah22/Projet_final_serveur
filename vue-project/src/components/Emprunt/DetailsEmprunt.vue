<template>
    <div>
      <h1>emprunt de {{livre.date_emprunt}} {{exemplaire. date_retour}}</h1>
   
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import useEmprunt from '../../services/serviceEmprunt';
  
  const emprunt= ref({});
  const route = useRoute();
  const { id } = route.params;
  const { getEmpruntParId } = useEmprunt();
  
  onBeforeMount(async () => {
    if (id) {
      try {
        emprunt.value = await getEmpruntParId(id);
      } catch (err) {
        console.error(err);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  /* Styles spécifiques au composant */
  </style>
  