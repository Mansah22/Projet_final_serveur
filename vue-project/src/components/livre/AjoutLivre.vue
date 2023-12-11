<template>
    <div>
        <form @submit.prevent="soumettre">
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
import { ref, reactive } from 'vue';
import useLivre from '../../services/serviceLivre';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

const { ajouterLivre } = useLivre()
const livre = ref({
    titre: '',
    auteur: '',
    date_publication:'',
    genre: '',
})

const soumettre = () => {
    console.log("livre", livre.value)
    ajouterLivre(livre.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout d'un livre", err))
}

</script>

<style lang="scss" scoped></style>