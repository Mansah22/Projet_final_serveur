//importer axios
import axios from 'axios'
//Creation du composable

const useLivre = () => {

    //Lire les donnees du serveur
    const getListLivre = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/livres`)
        return result.data.data

    }

    const getLivreParId = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/livres/${id}`)
        return result.data.data

    }

    const ajouterLivre = async (user) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/lives`,livre)
        return result.data.data

    }
    const supprimerLivre = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/livres/${id}`)
        return result.data.data

    }
    const editerLivre = async (id, livre) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/livres/${id}`,livre)
        return result.data.data

    }

    return { getListLivre, getLivreParId,supprimerLivre,ajouterLivre, editerLivre}
}

export default useLivre