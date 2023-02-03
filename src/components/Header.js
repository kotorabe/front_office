import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div >
                    <Link to="/login" className="btn btn-primary"> Se connecter </Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header