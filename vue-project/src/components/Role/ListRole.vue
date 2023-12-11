<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>lastName</th>
                <th>firstName</th>
                <th>Email</th>
                <th>birthDate</th>
                <th>phone</th>
            </tr>
        </thead>
        <tbody>
            <User v-for="visiteur in users" :key="student.id" :etudiant="student"
                @supprimer="recupererSuppression" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="router.push('/ajouter')">Ajouter user</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import User from './User.vue';
//Importer le composable qui a les fonctions du CRUD
import useUser from '../../services/serviceUser'
const visiteur = ref([])
import {useRouter} from 'vue-router'
const router = useRouter()
const { getListUser, supprimerUser } = useUser()

onBeforeMount(() => {
    getListUser().then(data => {
        users.value = data
        console.log('donnee', data)

    })
})

const recupererSuppression = (id) => {
    supprimerUser(id).then(data => {

        getListUsert().then(data => {
            users.value = data
            console.log('donnee', data)

        }).catch(err => console.log(err.message))

    })

}


</script>

<style lang="scss" scoped></style>