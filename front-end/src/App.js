import './App.css';
import React from 'react';
import {
  Link
} from "react-router-dom";
import * as Rbootstrap from "react-bootstrap";

function App() {
  console.log("test2");
  return (
    
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
  
    
       
    
  );
}
const rootElement = document.getElementById("root");
export default App;
