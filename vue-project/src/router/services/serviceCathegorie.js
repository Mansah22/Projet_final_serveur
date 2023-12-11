//importer axios
import axios from 'axios'
//Creation du composable

const useCathegorie = () => {

    //Lire les donnees du serveur
    const getListCathegorie = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/cathegories`)
        return result.data.data

    }

    const getCathegorieParId = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/cathegories/${id}`)
        return result.data.data

    }

    const ajouterCathegorie = async (cathegorie) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/cathegories`,cathegorie)
        return result.data.data

    }
    const supprimerCathegorie = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/cathegories/${id}`)
        return result.data.data

    }
    const editerCathegorie= async (id, cathe) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/cathegories/${id}`,Cathegorie)
        return result.data.data

    }

    return { getListCathegorie, getCathegorieParId,supprimerCathegorie,ajouterCathegorie, editerCathegorie}
}

export default useCathegorie