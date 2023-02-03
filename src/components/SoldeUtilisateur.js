import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UtilisateurHeader } from './UtilisateurHeader'
import { solde } from '../service/UtilisateurService'
import EnchereService from '../service/EnchereService'
import { toast } from 'react-toastify'

export const SoldeUtilisateur = () => {
  const Token = localStorage.getItem("token")
  const [recharge, setRecharge] = useState({
    idutilisateur:localStorage.getItem("idutilisateur"),
    montantrecharge:'',
  })

  const setter=(e,field)=>{
    let valiny=e.target.value
    setRecharge({
      ...recharge,
      [field]:valiny
    })
  }

  const[sold,setSolde] = useState([])
  useEffect(() => {
    solde(Token).then((response) => {
        setSolde(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}, [])

  const recharge_form=(e)=>{
    e.preventDefault();
    console.log(recharge)
    // eslint-disable-next-line
    if(recharge.montantrecharge.trim() == ''){
      toast.error("Veuiller entrer le montant desirer !!")
    }else{
      EnchereService.RechargementSolde(recharge).then(()=>{
        console.log("Demande effectuer")
        toast.success("Demande de recharge effectuer")
      })
    }
  }

if(Token){
  return (
    <><div>
          <UtilisateurHeader />
      </div><div className="container">
            <h2 className="text-center"> Votre solde est de : {sold} $</h2>
            <hr/>
            <h4 className="text-center">Demande de recharge</h4>
            <center>
              <div className="col-md-4">
                <form>
                  <p><input className="form-control" type="number" min="1" placeholder="Valeur desirer" value={recharge.montantrecharge} onChange={(e)=>setter(e,'montantrecharge')}/> <input type="hidden" value={recharge.idutilisateur}/></p>
                  <input type="submit" className="btn btn-success" onClick={recharge_form} />
                </form>
              </div>
            </center>
    </div></>
  )
}else{
  return(
    <div>
      <h2 className="text-center">Vous n'etes plus connecter !!</h2>
  </div>
  )
}
}
