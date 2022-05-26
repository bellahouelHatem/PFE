import React,{createRef, useEffect}  from "react";
import $ from "jquery";
import '../App.css';
import jwt_decode from "jwt-decode";
 
function Home() {
  const token =localStorage.getItem("token")

    useEffect(()=>{console.log(jwt_decode(token))},[])
    return (
      <div>

        </div>
        
        
      
    );
  }
  export default Home;

