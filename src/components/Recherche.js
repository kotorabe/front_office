import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EnchereService from '../service/EnchereService'

export const Recherche = () => {
        const[Rech,setData]=useState({
            search:'',
        })
        const[Val, setValeur] = useState([])
        const{valeur} = useParams();
        useEffect(() => {
          EnchereService.getRechercheValeur(valeur).then((response) => {
              setValeur(response.data)
              console.log(response.data);
          }).catch(error =>{
              console.log(error);
          })
      }, [])

        const setter=(e,field)=>{
            let valiny=e.target.value
            setData({
              ...Rech,
              [field]:valiny
            })
          }
  if(valeur == null){
    return (
      <center>
          <div>
              <h2>Search here</h2>
              <p><input className="form_control" type="text" placeholder="Recherche..." value={Rech.search} onChange={(e)=>setter(e,'search')}/>   <Link to={"/cherche/"+(Rech.search)} className="btn btn-info"> OK</Link></p>
          </div>
      </center>
    )
  }else if(valeur){
    return(
      <center>
          <div>
              <h2>Search here</h2>
              <p><input className="form_control" type="text" placeholder="Recherche..." value={Rech.search} onChange={(e)=>setter(e,'search')}/>  <Link to={"/cherche/"+(Rech.search)} className="btn btn-info"> OK</Link></p>
              <hr/>
              <table className="table">
                <thead className="text-center">
                  <tr>
                    <td>IdEnchere</td>
                    <td>Categorie</td>
                    <td>Date</td>
                    <td>Description</td>
                    <td>Statut</td>
                    <td>#</td>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {
                    Val.map(
                      val=>
                      <tr key={val.idenchere}>
                            <td>{val.idenchere}</td>
                            <td>{val.categorie}</td>
                            <td>{new Date(val.dateheureenchere).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</td>
                            <td>{val.description}</td>
                            <td>{val.etat}</td>
                            <td>
                                <Link className="btn btn-info" to="" onClick={() => window.location.href='/get_id/'+(val.idenchere)} >Voir detail</Link>
                            </td>
                        </tr>
                    )
                  }
                </tbody>
              </table>
          </div>
      </center>
    )
  }
  
}
