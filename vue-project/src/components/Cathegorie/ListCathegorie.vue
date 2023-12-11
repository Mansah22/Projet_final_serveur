<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>nom</th>
                    <th>description</th>
            </tr>
        </thead>
        <tbody>
        <Cathegorie v-for="Cathegorie in cathegories" :key="Cathegorie.id" :Cathegorie="Cathegorie"
                @supprimer="recupererSuppression" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="router.push('/ajouter')">Ajouter user</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import Cathegorie from './Cathegorie.vue';
//Importer le composable qui a les fonctions du CRUD
import useCathegorie from '../../services/serviceCathegorie'
const cathegories= ref([])
import {useRouter} from 'vue-router'
const router = useRouter()
const { getListCathegorie, supprimerCathegorie } = useCathegorie()

onBeforeMount(() => {
    getListCathegorie().then(data => {
        cathegories.value = data
        console.log('donnee', data)

    })
})

const recupererSuppression = (id) => {
    supprimerCathegorie(id).then(data => {

        getListCathegorie().then(data => {
            cathegories.value = data
            console.log('donnee', data)

        }).catch(err => console.log(err.message))

    })

}


</script>

<style lang="scss" scoped></style>