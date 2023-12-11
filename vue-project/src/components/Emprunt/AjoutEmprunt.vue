<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="date_emprunt" class="form-label">date_emprunt</label>
                <input v-model="exemplaire.date_emprunt" type="text" class="form-control" id="date_emprunt">
            </div>
            <div class="mb-3">
                <label for=" date_retour" class="form-label"> date_retour</label>
                <input v-model="exemplaire. date_retour" type="date" class="form-control" id=" date_retour">
            </div>
           

            <button type="submit" class="btn btn-primary">Ajouter un livre </button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useEmprunt from '../../services/serviceEmprunt';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

const { ajouterEmprunt } = useEmprunt()
const emprunt = ref({
    date_emprunt: '',
    date_retour: '',
  
})

const soumettre = () => {
    console.log("emprunt", emprunt.value)
    ajouterEmprunt(emprunt.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout d'un emprunt", err))
}

</script>

<style lang="scss" scoped></style>