import React, { Component }  from "react";
import * as Rbootstrap from "react-bootstrap";
import Home from "./Home";
import Formulaire from "./Formulaire";
import SafetyStandardsForm from './SafetyStandardsForm';
import StaticForms from "./StaticForms";
import DynamicForms from "./DynamicForms";
import ServerRoomInspectionForm from "./ServerRoomInspectionForm";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FormUpdate from "./FormUpdate";

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
            <Rbootstrap.Nav.Link as={Link}to={"/StaticForms"}>Static Forms</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/SafetyStandardsForm"}>Safety Standards Form</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/DynamicForms"}>Dynamic Forms</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/ServerRoomInspectionForm"}>Server Room Inspection Form</Rbootstrap.Nav.Link>
          </Rbootstrap.Nav>
          </Rbootstrap.Container>
          </Rbootstrap.Navbar>
          <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Formulaire" element={<Formulaire/>}/>
                <Route path="/StaticForms" element={<StaticForms/>}/>
                <Route path="/DynamicForms" element= {<DynamicForms/>}/>
                <Route path="/SafetyStandardsForm" element={<SafetyStandardsForm/>}/>
                <Route path="/updateForm" element={<FormUpdate/>}/>
                <Route path="/ServerRoomInspectionForm" element={<ServerRoomInspectionForm/>}/>
              </Routes>
              </div>
          </Router>
           );
    }
}
 