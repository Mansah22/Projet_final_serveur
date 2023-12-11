//importer axios
import axios from 'axios'
//Creation du composable

const userReservation = () => {

    //Lire les donnees du serveur
    const getListReservation = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/reservation`)
        return result.data.data

    }

    const getReservationParId = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/reservation/${id}`)
        return result.data.data

    }

    const ajouterReservation = async (reservation) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/reservations`,reservation)
        return result.data.data

    }
    const supprimerReservation = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/reservations/${id}`)
        return result.data.data

    }
    const editerReservation = async (id, etudiant) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/reservations/${id}`,user)
        return result.data.data

    }

    return { getListReservation, getReservationParId,supprimerReservation,ajouterReservation, editerReservation}
}

export default userReservation