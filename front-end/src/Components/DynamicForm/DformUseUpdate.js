import React,{createRef, useEffect, useState}  from "react";
import $ from "jquery";
import '../../App.css';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import PageInspector from "../dashboards/PageInspector";
import jwtDecode from "jwt-decode";
window.jQuery = $;
window.$ = $;
require("jquery-ui-sortable");
require('formBuilder/dist/form-render.min.js');
 
function DformUSEUpdate(props) {
  const location= useLocation();
  const [Form, setForm] = useState();
  const save = ()=>  {
   var Data = JSON.stringify(Form.userData)
   console.log(props.location.state)

   const body = {
    form : Data,
    idInspection:props.location.state["id"]
   }
   console.log(body)
   const token = localStorage.getItem("token");
   const Dtoken =jwtDecode(token) 
  axios.put('http://localhost:8082/api/FormUserData/'+props.location.state["id"],body)
    
}
    
    
    const fb = createRef();
    useEffect(()=>{
       const id =props.location.state.id
      const token = localStorage.getItem("token");
        if(token === null){
          props.history.push('/'); 
        }else{
          const Dtoken =jwtDecode(token) 

           if (Dtoken["iss"]=== "Administrator"){
             props.history.push('/PageAdmin');
          }else if(Dtoken["iss"]=== "ServiceProvider"){
            props.history.push('/PageServiceProvider');
      }else {
          axios.get('http://localhost:8082/api/FormUserDatas/'+id).then(resp=>{
              
          var formRenderOptions = {
            formData: JSON.parse(resp.data.form),
        dataType:'json' }
    const form = $(fb.current).formRender(formRenderOptions);
      setForm(form);
      })}
    }
},[])
    return (
        <>
      <PageInspector/>
      <div>
      <div  ref={fb}>
        </div>
        <button id = 'save' onClick={(e)=>{ if (window.confirm('Are you sure you want to submit this Form?')) save(e)}} type="button" class="btn btn-primary">Save</button>
      </div>
      </>
    );
  }
  export default DformUSEUpdate;