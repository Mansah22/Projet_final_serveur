//importer axios
import axios from 'axios'
//Creation du composable

const useExemplaire = () => {

    //Lire les donnees du serveur
    const getListExemplaire = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/exemplaires`)
        return result.data.data

    }

    const getExemplaireParId = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/exemplaires/${id}`)
        return result.data.data

    }

    const ajouterExemplaire = async (user) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/exemplaires`,exemplaire)
        return result.data.data

    }
    const supprimerExemplaire = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/exemplaires/${id}`)
        return result.data.data

    }
    const editerExemplaire = async (id, exemplaire) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/exemplaires/${id}`,exemplaire)
        return result.data.data

    }

    return { getListExemplaire, getExemplaireParId,supprimerExemplaire,ajouterExemplaire, editerExemplaire}
}

export default useExemplaire