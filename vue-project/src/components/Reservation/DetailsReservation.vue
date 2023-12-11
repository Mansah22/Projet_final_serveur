<template>
    <div>
      <h1>Profile de {{reservation.date_reservation}} {{ reservation.statut }}</h1>
   
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import useReservation from '../../services/serviceReservation';
  
  const reservation = ref({});
  const route = useRoute();
  const { id } = route.params;
  const { getReservationParId } = useReservation();
  
  onBeforeMount(async () => {
    if (id) {
      try {
        user.value = await getReservationParId(id);
      } catch (err) {
        console.error(err);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  /* Styles spécifiques au composant */
  </style>
  