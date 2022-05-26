import React, { Component }  from "react";
import * as Rbootstrap from "react-bootstrap";
import Home from "./Home";
import Formulaire from "./DynamicForm/Formulaire";
import StaticForms from "./StaticForm/StaticForms";
import DynamicForms from "./DynamicForm/DynamicForms";
import RiskManagementForm from "./StaticForm/RiskManagementForm";
import {Dashboard} from "./dashboards/dashboard.js";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import FormUpdate from "./DynamicForm/FormUpdate";
import FormInspector from "./Inspector/FormInspector";
import { Switch } from "react-router-dom";
import PlaningAction from "./Plan/PlaningAction";
import PlaningInsp from "./Plan/PlaningInsp";

export default class Page  extends Component {
    render() { 
      console.log("test3");
      console.log(localStorage.getItem('token'));
        return (
            <div className="news">
              <Rbootstrap.Navbar  bg="dark" variant="dark">
                <Rbootstrap.Container>
                  <Rbootstrap.Navbar.Brand as={Link}to={"/Home"}>Navbar</Rbootstrap.Navbar.Brand>
                  <Rbootstrap.Nav className="me-auto">
                    <Rbootstrap.Nav.Link as={Link}to={"/Home"}>Home</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/StaticForms"}>Static Forms</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/DynamicForms"}>Dynamic Forms</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/RiskManagementForm"}>Risk Management Form</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/GAPAnalysisForm"}>GAP Analysis Form</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/FormInspector"}>Inspector Form</Rbootstrap.Nav.Link>
                    <Rbootstrap.Nav.Link as={Link}to={"/planing"}>planing</Rbootstrap.Nav.Link>
            <Rbootstrap.Nav.Link as={Link}to={"/planingAction"}>action</Rbootstrap.Nav.Link>
                  </Rbootstrap.Nav>
                </Rbootstrap.Container>
              </Rbootstrap.Navbar>
            </div>
        );
    }
}
 