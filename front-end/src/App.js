import './App.css';
import * as Rbootstrap from "react-bootstrap";
import Home from "./Compoments/Home"
import Formulaire from "./Compoments/Formulaire"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
    
      <Rbootstrap.Navbar bg="dark" variant="dark">
    <Rbootstrap.Container>
    <Rbootstrap.Navbar.Brand href="#home">Navbar</Rbootstrap.Navbar.Brand>
    <Rbootstrap.Nav className="me-auto">
      <Rbootstrap.Nav.Link as={Link}to={"/Home"}>Home</Rbootstrap.Nav.Link>
      <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
    </Rbootstrap.Nav>
    </Rbootstrap.Container>
    </Rbootstrap.Navbar>
    </div>
    <Routes>
          <Route path="/Home" element={<Home/>}/>
           
          <Route path="/Formulaire" element={<Formulaire/>}/>
        </Routes>
    </Router>
  );
}

export default App;
