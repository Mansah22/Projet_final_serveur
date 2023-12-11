<template>
    <tr>
        <td>
            {{ user.lastName }}
        </td>
        <td>
            {{ user.firstName }}
        </td>
        <td>
            {{ user.email }}
        </td>
        <td>
            {{ user.birthDate }}
        </td>
        <td>
            {{ user.phone }}
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
  user: {
        type: Object,
        default: () => ({
            id: '',
            lastName: 'test',
            firstName: 'test',
            email: 'email@gmail.com',
            birthDate: '',
            Phone: ''
        })
    }
})

const emit = defineEmits(['supprimer', 'update'])

const gererSuppression = () => {
    emit('supprimer', props.user.id)
}

const allerADetail = () => {
    router.push(`/detail/${props.user.id}`)
}

const allerAEditer = () => {
    router.push(`/modifier/${props.user.id}`)
}
</script>

<style scoped></style>