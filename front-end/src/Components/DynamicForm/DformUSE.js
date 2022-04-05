import React,{createRef, useEffect, useState}  from "react";
import $ from "jquery";
import '../../App.css';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
window.jQuery = $;
window.$ = $;
require("jquery-ui-sortable");
require('formBuilder/dist/form-render.min.js');
 
function DformUSE() {
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
},[])
    return (
      
      <div>
      <div  ref={fb}>
        </div>
        <button id = 'save' onClick={(e)=>{ if (window.confirm('Are you sure you want to submit this Form?')) save(e)}} type="button" class="btn btn-primary">Save</button>
      </div>
      
    );
  }
  export default DformUSE;

