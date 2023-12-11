<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>etat</th>
                <th>localisation</th>
        
            
            </tr>
        </thead>
        <tbody>
            <Exemplaire v-for="Exemplaire in exemplaires" :key="Exemplaire.id" :Exemplaire="Exemplaire"
                @supprimer="recupererSuppression" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="router.push('/ajouter')">Ajouter user</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import Exemplaire from './Exemplaire.vue';
//Importer le composable qui a les fonctions du CRUD
import useExemplaire from '../../services/serviceExemplaire'
const exemplaires = ref([])
import {useRouter} from 'vue-router'
const router = useRouter()
const { getListExemplaire, supprimerExemplaire } = useExemplaire()

onBeforeMount(() => {
    getListExemplaire().then(data => {
        exemplaires.value = data
        console.log('donnee', data)

    })
})

const recupererSuppression = (id) => {
    supprimerExemplaire(id).then(data => {

        getListExemplaire().then(data => {
            exemplaires.value = data
            console.log('donnee', data)

        }).catch(err => console.log(err.message))

    })

}


</script>

<style lang="scss" scoped></style>