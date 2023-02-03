import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EnchereService from "../service/EnchereService";
import 'bootstrap/dist/css/bootstrap.min.css'

const DetailEnchere=()=>{
    const[Detail, setDetail]= useState([])
    const{idenchere} = useParams();
    useEffect(() => {
        EnchereService.getEncherebyId(idenchere).then((response) => {
            setDetail(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])
    if(idenchere){
        return(
            <div>
                <h2 className="text-center">Details de l'enchere</h2>
                {
                    Detail.map(
                        detail=>
                        <div className="col-5">
                            <p>Date : {new Date(detail.dateheureenchere).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</p>
                            <p>Heure : {new Date(detail.dateheureenchere).toLocaleTimeString ()}</p>
                            <p>Description : {detail.description}</p>
                            <p>Categorie : {detail.categorie}</p>
                            <p>Prix de mise en enchere : {detail.prixminimum}</p>
                            <p>Duree d'enchere : {detail.dureeenchere}</p>
                        </div>    
                    )
                }
            </div>
        )
    }
}
export default DetailEnchere