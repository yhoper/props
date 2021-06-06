import react from 'react'
import Contact from './components/Contact'
import Us from './components/Us'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="container mt-5">
    
    <h6>Menú</h6>

    <div className="btn-gorup">
    <Link to="/" className="btn btn-dark ml-5">Inicio</Link>
    <Link to="/us" className="btn btn-dark ml-5"> Nosotros</Link>
    <NavLink to="/contact" className="btn btn-dark ml-5"  activeClassName="active"> Contacto</NavLink>
    </div>
    
    <Switch>
    
    <Route path="/" exact>
    <Home/>
    </Route>
    
    <Route path="/contact">
    <Contact/>
    </Route>
    
    <Route path="/us">
    <Us/>
    </Route>
    
    </Switch>
    </div>
    </Router>
    );
  }
  
  export default App;
  