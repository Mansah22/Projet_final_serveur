<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>date_reservation</th>
                <th> statut</th>
         
            </tr>
        </thead>
        <tbody>
            <Reservation v-for="reservation in reservations" :key="reservation.id" :reservation="reservation"
                @supprimer="recupererSuppression" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="router.push('/ajouter')">Ajouter une reservation</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import Reservation from './Reservation.vue';
//Importer le composable qui a les fonctions du CRUD
import useReservation from '../../services/serviceReservation'
const reservations = ref([])
import {useRouter} from 'vue-router'
const router = useRouter()
const { getListReservation, supprimerReservation } = useReservation()

onBeforeMount(() => {
    getListReservation().then(data => {
        reservations.value = data
        console.log('donnee', data)

    })
})

const recupererSuppression = (id) => {
    supprimerReservation(id).then(data => {

        getListReservation().then(data => {
            reservations.value = data
            console.log('donnee', data)

        }).catch(err => console.log(err.message))

    })

}


</script>

<style lang="scss" scoped></style>