import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EnchereService from '../service/EnchereService'
import { UtilisateurHeader } from './UtilisateurHeader'

export const HistoriqueEnchere = () => {
    const idutilisateur=localStorage.getItem("idutilisateur")
    const[historique, setHistorique]=useState([])
    useEffect(() => {
        EnchereService.HistoriqueId(idutilisateur).then((response) => {
            setHistorique(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])

    
    if(idutilisateur != null){
        return (
            <div>
                <UtilisateurHeader />
                <h2 className="text-center">Vos Historiques</h2>
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>IdEnchere</th>
                            <th>Mise</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            historique.map(
                                hist=>
                                <tr key={hist.idenchere}>
                                    <td>{new Date(hist.dateheuresurenchere).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</td>
                                    <td>{new Date(hist.dateheuresurenchere).toLocaleTimeString ()}</td>
                                    <td>{hist.idenchere}</td>
                                    <td>$ {hist.montant}</td>
                                </tr>
                            )
                        }
        
                    </tbody>
                </table>
            </div>
          )
    }else{
        return(
            <div>
                <h2 className="text-center">Vous n'etes pas connecter</h2>
            </div>
        )
    }
  
}
