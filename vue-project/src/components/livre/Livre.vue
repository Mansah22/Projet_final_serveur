<template>
    <tr>
        <td>
            {{ livre.titre }}
        </td>
        <td>
            {{ livre.auteur }}
        </td>
        <td>
            {{ livre.date_publication }}
        </td>
        <td>
            {{livre,genre }}
        </td>
      
        <td>
            <button @click="allerADetail" class="btn btn-primary">Details</button>
            <button @click="allerAEditer" class="btn btn-success">Editer</button>
            <button @click="gererSuppression" class="btn btn-danger">Supprimer</button>
        </td>
    </tr>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  livre: {
        type: Object,
        default: () => ({
            id: '',
            titre: 'Harry Potter',
            auteur: 'jean bois',
            date_publication:'jean@gmail.com',
            genre: '',
         
        })
    }
})

const emit = defineEmits(['supprimer', 'update'])

const gererSuppression = () => {
    emit('supprimer', props.livre.id)
}

const allerADetail = () => {
    router.push(`/detail/${props.livre.id}`)
}

const allerAEditer = () => {
    router.push(`/modifier/${props.livre.id}`)
}
</script>

<style scoped></style>