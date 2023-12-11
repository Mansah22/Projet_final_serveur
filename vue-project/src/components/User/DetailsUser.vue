<template>
    <div>
      <h1>Profile de {{user.lastName }} {{ user.firstName }}</h1>
      <p>Email: {{user.email }}</p>
      <p>Date de naissance: {{ user.birthDate}}</p>
      <p>Numero de telephone: {{ user.phone}}</p>
    </div>
  </template>
  
  <script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params
const router = useRouter()
const user = ref({})

import useUser from '../../router/serviceUser';
const { editerUser, getUserParId } = useUser()

onBeforeMount(() => {
    if (id) getUserParId(id).then(data => {
        user.value = data
    }).catch(err => console.log(err))
})

const mettreAJour = () => {
    editerEtudiant(id, etudiant.value).then(() => {
        router.push('/')
    }).catch(err => console.log(err))

}
</script>

<style lang="scss" scoped></style>