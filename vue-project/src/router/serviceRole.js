//importer axios
import axios from 'axios'
//Creation du composable

const useUser = () => {

    //Lire les donnees du serveur
    const getListUser = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
        return result.data.data

    }

    const getUserParId = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${id}`)
        return result.data.data

    }

    const ajouterUser = async (user) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/users`,user)
        return result.data.data

    }
    const supprimerUser = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`)
        return result.data.data

    }
    const editerUser = async (id, etudiant) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/users/${id}`,user)
        return result.data.data

    }

    return { getListUser, getUserParId,supprimerUser,ajouterUser, editerUser}
}

export default useUser