<template>
    <tr>
        <td>
            {{ exemplaire.etat }}
        </td>
        <td>
            {{exemplaire.localisation }}
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
 exemplaire: {
        type: Object,
        default: () => ({
            id: '',
           etat: '',
            localisation: '',
         
         
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