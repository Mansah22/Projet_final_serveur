<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="lastName:" class="form-label">lastName</label>
                <input v-model="user.lastName" type="text" class="form-control" id="lastName">
            </div>
            <div class="mb-3">
                <label for="firstName" class="form-label">firstName</label>
                <input v-model="user.firstName" type="text" class="form-control" id="prenom">
            </div>
            <div class="mb-3">
                <label for="birthDate" class="form-label">Naissance</label>
                <input v-model="user.naissance" type="date" class="form-control" id="naissance">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">phone</label>
                <input v-model="user.phone" type="integer" class="form-control" id="phone">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="user.email" type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">password</label>
                <input v-model="user.mot_de_passe" type="password" class="form-control" id="mdp">
            </div>

            <button type="submit" class="btn btn-primary">Ajouter </button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useEtudiant from '../../services/serviceEtudiant';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

const { ajouterEtudiant } = useEtudiant()
const etudiant = ref({
    lastName: '',
    firstName: '',
    birthDate: '',
    phone: '',
    email: '',
    password: ''
})

const soumettre = () => {
    console.log("user", user.value)
    ajouterUser(user.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout d'un user", err))
}

</script>

<style lang="scss" scoped></style>