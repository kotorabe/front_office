import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EnchereService from '../service/EnchereService'
import { Link } from 'react-router-dom'

const ListEnchere=()=> {
    const[encheres, setEnchere] = useState([])
    useEffect(() => {
        EnchereService.getListEnchere().then((response) => {
            setEnchere(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])
  return (
    <div className="container">
        <h2 className="text-center">Liste des Encheres</h2>
        <p><Link to ="/recherche" className="btn btn-info">Faire une recherche</Link></p><hr/>
        <table className="table">
            <thead className="text-center">
                <tr>
                    <th>idEnchere</th>
                    <th>Categorie</th>
                    <th>Date</th>
                    <th>Prix Min</th>
                    <th>Statut</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    encheres.map(
                        enchere =>
                        <tr key={enchere.idenchere}>
                            <td>{enchere.idenchere}</td>
                            <td>{enchere.categorie}</td>
                            <td>{new Date(enchere.dateheureenchere).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</td>
                            <td>{enchere.prixminimum}</td>
                            <td>{enchere.etat}</td>
                            <td>
                                <Link className="btn btn-info" to={"/get_id/"+(enchere.idenchere)} >Voir detail</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEnchere