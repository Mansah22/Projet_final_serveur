<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="titre:" class="form-label">titre du livre</label>
                <input v-model="livre.titre" type="text" class="form-control" id="titre">
            </div>
            <div class="mb-3">
                <label for="auteur" class="form-label">auteur du livre</label>
                <input v-model="livre.auteur" type="text" class="form-control" id="livre">
            </div>
            <div class="mb-3">
                <label for="date_publication" class="form-label">date_publication</label>
                <input v-model="livre.date_publication" type="date" class="form-control" id="date_publication">
            </div>
            <div class="mb-3">
                <label for="genre" class="form-label">genre</label>
                <input v-model="livre.genre" type="integer" class="form-control" id="genre">
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

import useLivre from '../../services/serviceLivre';
const { editerLivre, getLivreParId } = useLivre()

onBeforeMount(() => {
    if (id) getLivreParId(id).then(data => {
        user.value = data
    }).catch(err => console.log(err))
})

const mettreAJour = () => {
    editerLivre(id, user.value).then(() => {
        router.push('/')
    }).catch(err => console.log(err))

}
</script>

<style lang="scss" scoped></style>


