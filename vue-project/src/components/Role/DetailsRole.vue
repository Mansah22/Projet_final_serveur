<template>
    <div>
      <h1>Profile de {{user.lastName }} {{ user.firstName }}</h1>
      <p>Email: {{user.email }}</p>
      <p>Date de naissance: {{ user.birthDate}}</p>
      <p>Numero de telephone: {{ user.phone}}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import useUser from '../../services/serviceEtudiant';
  
  const user = ref({});
  const route = useRoute();
  const { id } = route.params;
  const { getUserParId } = useUser();
  
  onBeforeMount(async () => {
    if (id) {
      try {
        user.value = await getUserParId(id);
      } catch (err) {
        console.error(err);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  /* Styles spécifiques au composant */
  </style>
  