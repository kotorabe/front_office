import axios from "axios"

class EnchereService{
    getListEnchere(){
        return axios.get("https://front-office-enchere.up.railway.app/Enchere/All")
    }
    getEncherebyId(idenchere){
        return axios.get("https://front-office-enchere.up.railway.app/Enchere/"+idenchere)
    }
    getRechercheValeur(valeur){
        return axios.get("https://front-office-enchere.up.railway.app/Enchere/recherche/"+valeur)
    }
    getListCateg(){
        return axios.get("https://front-office-enchere.up.railway.app/CategorieAdmin")
    }
    RechargementSolde(recharge){
        return axios.post("https://front-office-enchere.up.railway.app/Rechargement",recharge)
    }
    Surencherir(surenchere){
        return axios.post("https://front-office-enchere.up.railway.app/Surencherir",surenchere)
    }
    HistoriqueId(idutilisateur){
        return axios.get("https://front-office-enchere.up.railway.app/Surencherir/"+idutilisateur)
    }
    ListEnchereUtilisateur(idutilisateur){
        return axios.get("https://front-office-enchere.up.railway.app/Enchere/list/"+idutilisateur)
    }
    DetailsEnchere(idenchere){
        return axios.get("https://front-office-enchere.up.railway.app/Enchere/"+idenchere)
    }
}// eslint-disable-next-line
export default new EnchereService()
