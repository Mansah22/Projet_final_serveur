<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Date d'emprunt</th>
          <th>Date de retour</th>
            
            </tr>
        </thead>
        <tbody>
            <Emprunt v-for="Emprunt in emprunts" :key="Emprunt.id" :Emprunt="Emprunt"
                @supprimer="recupererSuppression" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="router.push('/ajouter')">Ajouter </button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import Emprunt from './Emprunt.vue';
//Importer le composable qui a les fonctions du CRUD
import useEmprunt from '../../services/serviceEmprunt'
const emprunts = ref([])
import {useRouter} from 'vue-router'
const router = useRouter()
const { getListEmprunt, supprimerEmprunt } = useEmprunt()

onBeforeMount(() => {
    getListEmprunt().then(data => {
        emprunts.value = data
        console.log('donnee', data)

    })
})

const recupererSuppression = (id) => {
    supprimerEmprunt(id).then(data => {

        getListEmprunt().then(data => {
            emprunts.value = data
            console.log('donnee', data)

        }).catch(err => console.log(err.message))

    })

}


</script>

<style lang="scss" scoped></style>