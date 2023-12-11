<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="etat:" class="form-label">etat</label>
                <input v-model="exemplaire.etat" type="text" class="form-control" id="etat">
            </div>
            <div class="mb-3">
                <label for="localisation" class="form-label">localisation</label>
                <input v-model="exemplaire.localisation" type="text" class="form-control" id="localisation">
          
            </div>

            <button type="submit" class="btn btn-primary">Ajouter un livre </button>
        </form>
    </div>
</template>



<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params
const router = useRouter()
const livre = ref({})

import useExemplaire from '../../services/serviceExemplaire';
const { editerExemplaire, getExemplaireParId } = useExemplaire()

onBeforeMount(() => {
    if (id) getExemplaireParId(id).then(data => {
       exemplaire.value = data
    }).catch(err => console.log(err))
})

const mettreAJour = () => {
    editerExemplaire(id, user.value).then(() => {
        router.push('/')
    }).catch(err => console.log(err))

}
</script>

<style lang="scss" scoped></style>


