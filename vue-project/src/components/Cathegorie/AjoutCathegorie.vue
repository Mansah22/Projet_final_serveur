<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nom:" class="form-label">nom</label>
                <input v-model="cathegorie.titre" type="text" class="form-control" id="cathegorie">
            </div>
           
            <div class="mb-3">
                <label for="description" class="form-label">cathegorie</label>
                <input v-model="cathegorie.description" type="integer" class="form-control" id="cathegorie">
            </div>
           

            <button type="submit" class="btn btn-primary">Ajouter </button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useCathegorie from '../../services/serviceCathegorie';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

const { ajouterCathegorie } = useCathegorie()
const cathegorie = ref({
    nom: '',
    description: '',
   
})

const soumettre = () => {
    console.log("cathegorie",cathegorie.value)
    ajouterCathegorie(cathegorie.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout d'un livre", err))
}

</script>

<style lang="scss" scoped></style>