import React, { useEffect, useState } from 'react'
import EnchereService from '../service/EnchereService'
import { UtilisateurHeader } from './UtilisateurHeader'

export const AjoutEnchere = () => {

    const[insertion, setInsertion] = useState({
        idutilisateur:localStorage.getItem("idutilisateur"),
        dureeenchere:'',
        description:'',
        idcategorie:'',
        prixdevente:'',
        prixminimum:'',
    })

    const setter=(e,field)=>{
        let valiny=e.target.value
        setInsertion({
          ...insertion,
          [field]:valiny
        })
    }

    const[categ, setCategorie] = useState([])
    useEffect(() => {
        EnchereService.getListCateg().then((response) => {
            setCategorie(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])

    const insert_form=(e)=>{
        e.preventDefault();
        console.log(insertion)
    }
  return (
    <div>
        <UtilisateurHeader />
        <h2 className="text-center">Ajouter une enchere</h2>
        <center>
              <div className="col-md-4">
                <form>
                  <p><textarea className="form-control" type="text" placeholder="Desciption" value={insertion.description} onChange={(e)=>setter(e,'description')}/></p>
                  <p><select className="form-control">
                    {
                        categ.map(
                            categor=>
                            <option key={categor.idcategorie} value={insertion.idcategorie=categor.idcategorie} >{categor.categorie}</option>
                        )
                    }
                    </select></p>
                    <p><input type="number" min="1" placeholder="Prix de depart" className="form-control" value={insertion.prixminimum} onChange={(e)=>setter(e,'prixminimum')} /></p>
                    <p><input type="number" min="0" placeholder="duree de l'enchere" className="form-control" value={insertion.dureeenchere} onChange={(e)=>setter(e,'dureeenchere')} /></p>
                    <input type="submit" className="btn btn-success" value="Valider" onClick={insert_form} />
                </form>
              </div>
            </center>
    </div>
  )
}
