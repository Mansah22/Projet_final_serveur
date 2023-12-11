<template>
    <div>
      <h1>cathegorie de {{cathegorie.nom}} {{ cathegorie.description }}</h1>

    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import useCathegorie from '../../services/serviceCathegorie';
  
  const cathegorie = ref({});
  const route = useRoute();
  const { id } = route.params;
  const { getCathegorieParId } = useCathegorie();
  
  onBeforeMount(async () => {
    if (id) {
      try {
        cathegorie.value = await getCathegorieParId(id);
      } catch (err) {
        console.error(err);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  /* Styles spécifiques au composant */
  </style>
  