<template>
    <div>
        <form @submit.prevent="mettreAJour">
          
            <div class="mb-3">
                <label for="date_reservation: " class="form-label">date_reservation</label>
                <input v-model="reservation.date_reservation" type="text" class="form-control" id="date_reservation">
            </div>
            <div class="mb-3">
                <label for="statut" class="form-label">statut</label>
                <input v-model="reservation.statut" type="text" class="form-control" id="statut">
            </div>
             

            <button type="submit" class="btn btn-primary">Ajouter </button>
        </form>
    </div>
</template>



<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params
const router = useRouter()
const reservation = ref({})

import useReservation from '../../services/serviceReservation';
const { editerReservation, getReservationParId } = useReservation()

onBeforeMount(() => {
    if (id) getReservationParId(id).then(data => {
        reservation.value = data
    }).catch(err => console.log(err))
})

const mettreAJour = () => {
    editerReservationt(id, reservation.value).then(() => {
        router.push('/')
    }).catch(err => console.log(err))

}
</script>

<style lang="scss" scoped></style>


