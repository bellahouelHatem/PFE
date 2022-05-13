import React, { Component }  from "react";
import * as Rbootstrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Page  extends Component {
    render() { 
        return (
         
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
            <Rbootstrap.Nav.Link as={Link}to={"/planingAction"}>action</Rbootstrap.Nav.Link>

            <Rbootstrap.Nav.Link as={Link}to={"/IsnpecteurForm"}>Isnpecteur</Rbootstrap.Nav.Link>
          </Rbootstrap.Nav>
          </Rbootstrap.Container>
          </Rbootstrap.Navbar>
          </div>
          
          
           );
    }
}
 