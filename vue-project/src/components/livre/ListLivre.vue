<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>titre</th>
                <th>auteur</th>
                <th>date_publication</th>
                <th>genre</th>
            
            </tr>
        </thead>
        <tbody>
            <Livre v-for="livre in livres" :key="livres.id" :livre="livres"
                @supprimer="recupererSuppression" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="router.push('/ajouter')">Ajouter user</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import Livre from './Livre.vue';
//Importer le composable qui a les fonctions du CRUD
import useLivre from '../../services/servicelivre'
const livres = ref([])
import {useRouter} from 'vue-router'
const router = useRouter()
const { getListLivre, supprimerLivre } = useLivre()

onBeforeMount(() => {
    getListLivre().then(data => {
        livres.value = data
        console.log('donnee', data)

    })
})

const recupererSuppression = (id) => {
    supprimerLivre(id).then(data => {

        getListUsert().then(data => {
            livres.value = data
            console.log('donnee', data)

        }).catch(err => console.log(err.message))

    })

}


</script>

<style lang="scss" scoped></style>