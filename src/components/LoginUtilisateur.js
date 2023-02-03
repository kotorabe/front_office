import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { log } from '../service/UtilisateurService'
import { toast } from 'react-toastify'

const LoginUtilisateur=()=> {
  const[Login,setData]=useState({
    email:'',
    mdp:''
  })
  const history = useHistory()

  const Vider=()=>{
    setData({
      email:"",
      mdp:"",
    })
  }

  const setter=(e,field)=>{
    let valiny=e.target.value
    setData({
      ...Login,
      [field]:valiny
    })
  }

  const btn_form=(e)=>{
    e.preventDefault();
    console.log(Login);
    // eslint-disable-next-line
    if(Login.email.trim()=='' || Login.mdp.trim()==''){// eslint-disable-next-line
      toast.error('Email et Mot de passe requis !!')
    }else{
    log(Login).then((response)=>{
      console.log("Loger avec succes")
      localStorage.setItem("User", Login.email)
      localStorage.setItem("idutilisateur", response.data.idutilisateur)
      localStorage.setItem("expire", response.data.expire)
      localStorage.setItem("token", response.data.token)
      history.push('/landing')
    }).catch(error=>{
      console.log(error)// eslint-disable-next-line
      toast.error('Verifier vos identifiants !!')
    })}
  }
  return (
    <div className="App">
      <h1>Login User</h1><hr/>
      <center>
      <div className='col-md-3'>
        <form>
          <p><input className='form-control' type="email" placeholder="Email" value={Login.email} onChange={(e)=>setter(e,'email')}/></p>
          <p><input className='form-control' type="password" placeholder="Mot de passe" value={Login.mdp} onChange={(e)=>setter(e,'mdp')}/></p>
          <p><input className='btn btn-primary' type="submit" value="Log in" onClick={btn_form}/>  <input className='btn btn-warning' type="submit" value="Cancel" onClick={Vider}/></p><hr/>
          <Link to ="/inscription" className="btn btn-info"> S'inscrire </Link>
        </form>
      </div>
      </center>
    </div>
  )
}



export default LoginUtilisateur