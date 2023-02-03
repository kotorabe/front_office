import React, { useEffect, useState } from 'react'
import { UtilisateurHeader } from './UtilisateurHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import EnchereService from '../service/EnchereService'
import { Link } from 'react-router-dom'

export const ParticipeEnchere = () => {

    const idutilisateur = localStorage.getItem("idutilisateur")
    const[list, setlist]=useState([])
    useEffect(() => {
        EnchereService.ListEnchereUtilisateur(idutilisateur).then((response) => {
            setlist(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])


  return (
    <div>
        <UtilisateurHeader />
        <h2 className="text-center">Participer a une enchere</h2><hr/>
        <table className="table">
            <thead className="text-center">
                <tr>
                    <th>Idenchere</th>
                    <th>Categorie</th>
                    <th>Date</th>
                    <th>Statut</th>
                    <th>#</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    list.map(
                        List=>
                            <tr key={List.idenchere}>
                                <td>{List.idenchere}</td>
                                <td>{List.categorie}</td>
                                <td>{new Date(List.dateheureenchere).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</td>
                                <td>{List.etat}</td>
                                <td><Link className="btn btn-info" to={"/get_id/"+(List.idenchere)} >Voir detail</Link></td>
                                <td><Link className="btn btn-success" to={"/get_for_part/"+(List.idenchere)} >Participer</Link></td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
