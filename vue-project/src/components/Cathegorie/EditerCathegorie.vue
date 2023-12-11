<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="nom:" class="form-label">nom</label>
                <input v-model="cathegorie.titre" type="text" class="form-control" id="cathegorie">
            </div>
           
            <div class="mb-3">
                <label for="description" class="form-label">cathegorie</label>
                <input v-model="cathegorie.description" type="integer" class="form-control" id="cathegorie">
            </div>

            <button type="submit" class="btn btn-primary">Ajouter  </button>
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


