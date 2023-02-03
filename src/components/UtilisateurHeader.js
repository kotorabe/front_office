import React from 'react'
import { Link } from 'react-router-dom'

export const UtilisateurHeader = () => {
    const idutilisateur = localStorage.getItem("idutilisateur")
    const deconnex= ()=>{
        localStorage.clear()
        window.location.href='/'
    }
  return (
    <div>
        <hr/>
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link className="nav-link" to="/landing">Solde</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/participeEnchere">Participer a une enchere</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/historiqueUtilisateur/"+(idutilisateur)} tabindex="-1" aria-disabled="true">Historique de mes encheres effectue</Link>
            </li>
            <li>
                <input type="submit" className="btn btn-danger" value="Deconnexion" onClick={deconnex} />
            </li>
        </ul>
    </div>
  )
}
