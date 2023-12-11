<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="lastName:" class="form-label">lastName</label>
                <input v-model="user.lastName" type="text" class="form-control" id="lastName">
            </div>
            <div class="mb-3">
                <label for="firstName" class="form-label">firstName</label>
                <input v-model="user.firstName" type="text" class="form-control" id="firstName">
            </div>
            <div class="mb-3">
                <label for="birthDate" class="form-label">birthDate</label>
                <input v-model="user.birthDate" type="date" class="form-control" id="birthDate">
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
import useUser from '../../router/serviceUser';

// Module qui permet de rediriger vers une autre page
import { useRouter } from 'vue-router';
const router = useRouter()

 const { ajouterUser } = useUser()
const user = ref({
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

<style lang="scss" scoped>


body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f7f7f7;
  color: #333;
  margin: 0;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

Styles du conteneur du formulaire 
.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

/* Styles des étiquettes */
.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

/* Styles des champs de saisie */
.form-control {
  width: 100%;
  padding: 8px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccd0d5;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Styles du bouton */
.btn-primary {
  display: block;
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #0056b3;
}


</style>