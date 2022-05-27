import React, { useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import * as Rbootstrap from "react-bootstrap";
import { logOut } from '../../Services/authenticationService';
import jwt_decode from "jwt-decode";
function PageAdmin(props) {
  useEffect(()=>{
    const token = localStorage.getItem("token");
    
      if(token== null){
        props.history.push('/'); 
      }else{
        const Dtoken =jwt_decode(token) ;
        console.log(Dtoken)
         if(Dtoken["iss"]=== "Inspector"){
        props.history.push('/PageInspector');
    }else if(Dtoken["iss"]=== "ServiceProvider"){
        props.history.push('/PageServiceProvider');
    }}
  },[])
    console.log("test2");
    return (
      <div>
      
      <Rbootstrap.Navbar  bg="dark" variant="dark">
      <Rbootstrap.Container>
        <Rbootstrap.Navbar.Brand as={Link}to={"/Home"}>Admin</Rbootstrap.Navbar.Brand>
        <Rbootstrap.Nav className="me-auto">
          <Rbootstrap.Nav.Link as={Link}to={"/Home"} >Home</Rbootstrap.Nav.Link>
          <Rbootstrap.Nav.Link as={Link}to={"/FormInspector"}>Inspector Form</Rbootstrap.Nav.Link>
        </Rbootstrap.Nav>
        <Rbootstrap.Nav className="justify-content-end">
        <Rbootstrap.Nav.Link as={Link}to={"/"} onClick={logOut} >Log out</Rbootstrap.Nav.Link>
        <Rbootstrap.Nav.Link as={Link}to={"/Formulaire"}>Formulaire</Rbootstrap.Nav.Link>
        </Rbootstrap.Nav>

      </Rbootstrap.Container>
    </Rbootstrap.Navbar>
    	
<a href="http://localhost:8082/api/RiskManagementForm/export/pdf">Export to PDF</a>
      
    </div>
      
    );
  }
  export default PageAdmin;
  