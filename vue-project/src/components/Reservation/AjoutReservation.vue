<template>
    <div>
        <form @submit.prevent="soumettre">
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
import { ref, reactive } from 'vue';
import useReservation from '../../router/serviceReservation';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

const { ajouterReservation } = useReservation()
const reservation = ref({
    date_reservation: '',
    statut: '',
 
})

const soumettre = () => {
    console.log("reservation", reservation.value)
    ajouterreservation(reservation.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout d'une reservation", err))
}

</script>

<style lang="scss" scoped></style>