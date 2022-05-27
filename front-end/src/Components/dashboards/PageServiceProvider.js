
import React, { useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import * as Rbootstrap from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { logOut } from '../../Services/authenticationService';
function PageServiceProvider(props) {
    console.log("test2");
    useEffect(()=>{
      const token = localStorage.getItem("token");
        if(token === null){
          props.history.push('/'); 
        }else {
          const Dtoken =jwt_decode(token)           
          if (Dtoken["iss"]=== "Administrator"){
          props.history.push('/PageAdmin');
      }else if(Dtoken["iss"]=== "Inspector"){
          props.history.push('/PageInspector');
      }}
    },[])
    return (
      
      <Rbootstrap.Navbar  bg="dark" variant="dark">
      <Rbootstrap.Container>
        <Rbootstrap.Navbar.Brand as={Link}to={"/Home"}>Services Provider</Rbootstrap.Navbar.Brand>
        <Rbootstrap.Nav className="me-auto">
          <Rbootstrap.Nav.Link as={Link}to={"/planing"}>planing</Rbootstrap.Nav.Link>
  <Rbootstrap.Nav.Link as={Link}to={"/planingAction"}>action</Rbootstrap.Nav.Link>
        </Rbootstrap.Nav>
        <Rbootstrap.Nav className="justify-content-end">
        <Rbootstrap.Nav.Link as={Link}to={"/"} onClick={logOut} >Log out</Rbootstrap.Nav.Link>
        <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
        </Rbootstrap.Nav>
      </Rbootstrap.Container>
    </Rbootstrap.Navbar>
    
      
         
      
    );
  }
  export default PageServiceProvider;
  