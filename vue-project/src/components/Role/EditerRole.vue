<template>
    <div>
        <form @submit.prevent="mettreAJour">
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
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params
const router = useRouter()
const user = ref({})

import useUser from '../../services/serviceUser';
const { editerUser, getUserParId } = useUser()

onBeforeMount(() => {
    if (id) getUserParId(id).then(data => {
        user.value = data
    }).catch(err => console.log(err))
})

const mettreAJour = () => {
    editerUsert(id, user.value).then(() => {
        router.push('/')
    }).catch(err => console.log(err))

}
</script>

<style lang="scss" scoped></style>


