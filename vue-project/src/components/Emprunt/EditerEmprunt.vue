<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="date_emprunt" class="form-label">date_emprunt</label>
                <input v-model="emprunt.date_emprunt" type="text" class="form-control" id="date_emprunt">
            </div>
            <div class="mb-3">
                <label for=" date_retour" class="form-label"> date_retour</label>
                <input v-model="emprunt. date_retour" type="date" class="form-control" id=" date_retour">
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
const exemplaire = ref({})

import useExemplaire from '../../services/serviceExemplaire';
const { editerExemplaire, getExemplaireParId } = useExemplaire()

onBeforeMount(() => {
    if (id) getExemplaireParId(id).then(data => {
        exemplaire.value = data
    }).catch(err => console.log(err))
})

const mettreAJour = () => {
    editerExemplaire(id, exemplaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log(err))

}
</script>

<style lang="scss" scoped></style>


