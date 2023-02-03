import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import EnchereService from '../service/EnchereService'
import { solde } from '../service/UtilisateurService'
import { UtilisateurHeader } from './UtilisateurHeader'

export const ParticipeDetail = () => {
    const{idenchere} = useParams()
    const Token = localStorage.getItem("token")
    const[surenchere, setSurEnchere]=useState({
        idenchere:idenchere,
        idutilisateur:localStorage.getItem("idutilisateur"),
        montant:'',
    })

    const setter=(e,field)=>{
        let valiny=e.target.value
        setSurEnchere({
          ...surenchere,
          [field]:valiny
        })
    }

    const[list, setlist]=useState([])
    useEffect(() => {
        EnchereService.DetailsEnchere(idenchere).then((response) => {
            setlist(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])

    const[sold,setSolde] = useState([])
  useEffect(() => {
    solde(Token).then((response) => {
        setSolde(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}, [])

    const sur_form=(e)=>{
        e.preventDefault();
        console.log(surenchere);
        if(surenchere.montant.trim()==''){
            toast.error("Veuiller remplir tous les champs !!")
        }else{
            EnchereService.Surencherir(surenchere).then(()=>{
                console.log("Vous avez surencheri")
                toast.success("Vous avez surencheri")
            }).catch(error=>{
                toast.error("Votre mise est trop basse ou votre solde est insuffisante !!")
            })
        }
    }
  return (
    <div>
        <UtilisateurHeader />
        <h2 className="text-center">Participer a une enchere/<strong> Votre solde: {sold} $</strong></h2><hr/>
        <table className="table">
            <thead className="text-center">
                <tr>
                    <th>Idenchere</th>
                    <th>Prix de mise Enchere</th>
                    <th>Mise max actuelle</th>
                    <th>Votre Mise</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    list.map(
                        List=>
                            <tr key={List.idenchere}>
                                <td>{List.idenchere}</td>
                                <td>{List.prixminimum}</td>
                                <td>{List.prixdevente}</td>
                                <input type="hidden" value={surenchere.idenchere} />
                                <input type="hidden" value={surenchere.idutilisateur} />
                                <td><input type="number" min={List.prixdevente + 10} value={surenchere.montant} onChange={(e)=>setter(e,'montant')}/></td>
                                <td><Link className="btn btn-success" onClick={sur_form} >Surencherir</Link></td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
