import React, { Component }  from "react";
import * as Rbootstrap from "react-bootstrap";
import Home from "./Home"
import Formulaire from "./Formulaire"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class Page  extends Component {
    render() { 
        return (
          <Router>
                <div className="news">
            <Rbootstrap.Navbar  bg="dark" variant="dark">
          <Rbootstrap.Container>
          <Rbootstrap.Navbar.Brand as={Link}to={"/Home"}>Navbar</Rbootstrap.Navbar.Brand>
          <Rbootstrap.Nav className="me-auto">
            <Rbootstrap.Nav.Link as={Link}to={"/Home"}>Home</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
          </Rbootstrap.Nav>
          </Rbootstrap.Container>
          </Rbootstrap.Navbar>
          <Routes>
                <Route path="/Home" element={<Home/>}/>
                 
                <Route path="/Formulaire" element={<Formulaire/>}/>
              </Routes>
              </div>
          </Router>
          
          
           );
    }
}
 