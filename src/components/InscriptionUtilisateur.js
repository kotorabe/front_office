import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { inscription } from '../service/UtilisateurService'

const InscriptionUtilisateur=()=> {
  const[Inscription,setData]=useState({
    nom:'',
    prenom:'',
    email:'',
    mdp:''
  })

  const setter=(e,field)=>{
    let valiny=e.target.value
    setData({
      ...Inscription,
      [field]:valiny
    })
  }

  const insc_form=(e)=>{
    e.preventDefault();
    console.log(Inscription);
    // eslint-disable-next-line
    if(Inscription.nom.trim()=='' || Inscription.prenom.trim()=='' || Inscription.email.trim()=='' || Inscription.mdp.trim()==''){// eslint-disable-next-line
      toast.error("Veuiller remplir tous les champs !!")
    }
    inscription(Inscription).then(()=>{
      console.log("Inscris avec succes")
      toast.success("Inscris avec succes")
    }).catch(error=>{
      console.log(error)// eslint-disable-next-line
      toast.error("Erreur interne du serveur !!")
    })
  }

  return (
    <div>
        <h2 className="text-center"> Inscription </h2>
        <form>
        <center>
          <div className='col-md-4'>
              <p><input type="text" className="form-control" placeholder="Nom" value={Inscription.nom} onChange={(e)=>setter(e,'nom')}/></p>
              <p><input type="text" className="form-control" placeholder="Prenom" value={Inscription.prenom} onChange={(e)=>setter(e,'prenom')}/></p>
              <p><input type="email" className="form-control" placeholder="Email" value={Inscription.email} onChange={(e)=>setter(e,'email')}/></p>
              <p><input type="password" className="form-control" placeholder="Mot de passe" value={Inscription.mdp} onChange={(e)=>setter(e,'mdp')}/></p>
              <p><input type="submit" className="btn btn-primary" value="S'inscrire" onClick={insc_form}/></p>
            </div>
          </center>
          </form>
    </div>
  )
}

export default InscriptionUtilisateur