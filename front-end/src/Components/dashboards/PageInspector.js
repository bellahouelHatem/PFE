
import React, { useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import * as Rbootstrap from "react-bootstrap";
import { logOut } from '../../Services/authenticationService';
import jwtDecode from 'jwt-decode';
function PageInspector(props) {
    console.log("test2");
    // useEffect(()=>{
    //   const token = localStorage.getItem("token");
    //     if(token === null){
    //       props.history.push('/'); 
    //     }else{
    //       const Dtoken =jwtDecode(token) 

    //        if (Dtoken["iss"]=== "Administrator"){
    //          props.history.push('/PageAdmin');
    //       }else if(Dtoken["iss"]=== "ServiceProvider"){
    //         props.history.push('/PageServiceProvider');
    //   }}
    // },[])
    return (
      
      <Rbootstrap.Navbar  bg="dark" variant="dark">
      <Rbootstrap.Container>
        <Rbootstrap.Navbar.Brand as={Link}to={"/Home"}>inspector</Rbootstrap.Navbar.Brand>
        <Rbootstrap.Nav className="me-auto">
          <Rbootstrap.Nav.Link as={Link}to={"/Home"}>Home</Rbootstrap.Nav.Link>
          <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
          <Rbootstrap.Nav.Link as={Link}to={"/StaticForms"}>Static Forms</Rbootstrap.Nav.Link>
          <Rbootstrap.Nav.Link as={Link}to={"/DynamicForms"}>Dynamic Forms</Rbootstrap.Nav.Link>
          <Rbootstrap.Nav.Link as={Link}to={"/RiskManagementForm"}>Risk Management Form</Rbootstrap.Nav.Link>
          <Rbootstrap.Nav.Link as={Link}to={"/GAPAnalysisForm"}>GAP Analysis Form</Rbootstrap.Nav.Link>
        </Rbootstrap.Nav>
        <Rbootstrap.Nav className="justify-content-end">
        <Rbootstrap.Nav.Link as={Link}to={"/"} onClick={logOut} >Log out</Rbootstrap.Nav.Link>
        <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
        </Rbootstrap.Nav>
      </Rbootstrap.Container>
    </Rbootstrap.Navbar>
    
      
         
      
    );
  }
  export default PageInspector;
  