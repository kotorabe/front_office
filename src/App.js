import './App.css';
import Grid from '@react-css/grid'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginUtilisateur from './components/LoginUtilisateur';
import InscriptionUtilisateur from './components/InscriptionUtilisateur';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEnchere from './components/ListEnchere';
import Header from './components/Header';
import { Recherche } from './components/Recherche';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DetailEnchere from './components/DetailEnchere';
import { SoldeUtilisateur } from './components/SoldeUtilisateur';
import { ParticipeEnchere } from './components/ParticipeEnchere';
import { ParticipeDetail } from './components/ParticipeDetail';
import { HistoriqueEnchere } from './components/HistoriqueEnchere';


function App() {
  return(
    <div>
      <Grid>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEnchere}></Route>
            <Route exact path="/login" component={LoginUtilisateur}></Route>
            <Route exact path="/inscription" component={InscriptionUtilisateur}></Route>
            <Route exact path="/recherche" component={Recherche}></Route>
            <Route exact path="/get_id/:idenchere" component={DetailEnchere}></Route>
            <Route exact path="/cherche/:valeur" component={Recherche}></Route>
            <Route exact path="/landing" component={SoldeUtilisateur}></Route>
            <Route exact path="/participeEnchere" component={ParticipeEnchere}></Route>
            <Route exact path="/get_for_part/:idenchere" component={ParticipeDetail}></Route>
            <Route exact path="/historiqueUtilisateur/:idutilisateur" component={HistoriqueEnchere}></Route>
          </Switch>
        </div>
      </Router>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
      </Grid>
    </div>
  )
}

export default App;