<template>
    <tr>
        <td>
            {{ emprunt.date_emprunt }}
        </td>
        <td>
            {{ emprunt.date_retour }}
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
  emprunt: {
        type: Object,
        default: () => ({
            id: '',
            date_emprunt: '',
            date_retour: '',
       
        })
    }
})

const emit = defineEmits(['supprimer', 'update'])

const gererSuppression = () => {
    emit('supprimer', props.emprunt.id)
}

const allerADetail = () => {
    router.push(`/detail/${props.emprunt.id}`)
}

const allerAEditer = () => {
    router.push(`/modifier/${props.emprunt.id}`)
}
</script>

<style scoped></style>