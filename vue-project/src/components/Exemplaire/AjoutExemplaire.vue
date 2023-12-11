<template>
    <div>
        <form @submit.prevent="soumettre">
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
import { ref, reactive } from 'vue';
import useExemplaire from '../../services/serviceLExemplaire';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

const { ajouterExemplaire } = useExemplaire()
const exemplaire = ref({
    etat: '',
    localisation: '',

})

const soumettre = () => {
    console.log("exemplaire", exemplaire.value)
    ajouterExemplaire(exemplaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout d'une cathegorie", err))
}

</script>

<style lang="scss" scoped></style>