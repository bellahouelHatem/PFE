import React, { Component }  from "react";
import * as Rbootstrap from "react-bootstrap";
import Home from "./Home";
import Formulaire from "./DynamicForm/Formulaire";
import SafetyStandardsForm from './StaticForm/SafetyStandardsForm';
import StaticForms from "./StaticForm/StaticForms";
import DynamicForms from "./DynamicForm/DynamicForms";
import DformUSE from "./DynamicForm/DformUSE";
import ServerRoomInspectionForm from "./StaticForm/ServerRoomInspectionForm";
import Planing from"./PlanInspection/Planing"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FormUpdate from "./DynamicForm/FormUpdate";
import FormInspecteur from "./PlanInspection/Inspecteur/FormInspecteur";

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
            <Rbootstrap.Nav.Link as={Link}to={"/StaticForms"}>Static Forms</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/SafetyStandardsForm"}>Safety Standards Form</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/DynamicForms"}>Dynamic Forms</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/ServerRoomInspectionForm"}>Server Room Inspection Form</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/planing"}>planing</Rbootstrap.Nav.Link>

            <Rbootstrap.Nav.Link as={Link}to={"/IsnpecteurForm"}>Isnpecteur</Rbootstrap.Nav.Link>
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
                <Route path="/DynamicFormUse" element={<DformUSE/>}/>
                <Route path="/IsnpecteurForm" element={<FormInspecteur/>}/>
                <Route path="/planing" element={<Planing/>}/>
              </Routes>
              </div>
          </Router>
           );
    }
}
 