import React,{createRef, useEffect, useState}  from "react";
import $ from "jquery";
import '../../App.css';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import PageInspector from "../dashboards/PageInspector";
window.jQuery = $;
window.$ = $;
require("jquery-ui-sortable");
require('formBuilder/dist/form-render.min.js');
 
function DformUSE(props) {
  const location= useLocation();
  const {data}=location.state;
  const [Form, setForm] = useState();
  const save = ()=>  {
   var Data = JSON.stringify(Form.userData)
   console.log(JSON.parse(Data))
   const body = {
    formdata : Data
   }
  axios.post('http://localhost:8081/api/FormUserData',body).catch(err=>console.log(err))
  
}
    
    var formRenderOptions = {
        formData: JSON.parse(data),
    dataType:'json' }
    const fb = createRef();
    useEffect(()=>{const form = $(fb.current).formRender(formRenderOptions);
      setForm(form);
      const token = localStorage.getItem("token");
        if(token === null){
          props.history.push('/'); 
        }else{
          const Dtoken =jwt_decode(token) 

           if (Dtoken["iss"]=== "Administrator"){
             props.history.push('/PageAdmin');
          }else if(Dtoken["iss"]=== "ServiceProvider"){
            props.history.push('/PageServiceProvider');
      }}
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
  export default DformUSE;