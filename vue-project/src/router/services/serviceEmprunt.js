//importer axios
import axios from 'axios'
//Creation du composable

const useEmprunt = () => {

    //Lire les donnees du serveur
    const getListEmprunt  = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/emprunts `)
        return result.data.data

    }

    const getEmpruntParId = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/emprunts/${id}`)
        return result.data.data

    }

    const ajouterEmprunt  = async (emprunt ) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/emprunts `,emprunt )
        return result.data.data

    }
    const supprimerEmprunt  = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/emprunts /${id}`)
        return result.data.data

    }
    const editerEmprunt = async (id, emprunt ) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/emprunts /${id}`,emprunt )
        return result.data.data

    }

    return { getListEmprunt, getEmpruntParId,supprimerEmprunt,ajouterEmprunt, editerEmprunt}
}

export default useEmprunt