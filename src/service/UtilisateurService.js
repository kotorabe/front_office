import axios from 'axios';

export const log=Login=>{
    return axios.post("https://front-office-enchere.up.railway.app/Utilisateur/login",Login)
}

export const inscription=Inscription=>{
    return axios.post("https://front-office-enchere.up.railway.app/Utilisateur",Inscription).then((response)=>response.data)
}

export const recherche=Recherche=>{
    return axios.post("https://front-office-enchere.up.railway.app/Enchere/recherche/",Recherche).then((response)=>response.data)
}
 
export const solde=token=>{
    return axios.get("https://front-office-enchere.up.railway.app/Utilisateur/solde/"+token)
}
