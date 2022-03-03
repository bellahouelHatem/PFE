import React, { createRef, useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";
import { useLocation } from "react-router-dom";

 window.jQuery = $;
 window.$ = $;
 require("jquery-ui-sortable");
  require("formBuilder");
  
function FormUpdate (property) {
  const location= useLocation();
  const {hatem}=location.state
  const Id = hatem;
  
  
  const fb = createRef();
   const save = ()=>  {
    var data = JSON.stringify(state.actions.getData('json', true))
    var body = {form : data}
    fetch('http://localhost:8081/api/form/{id}',{
      method:'POST',
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(body)})
   .then(res=>{alert()})
 }
 const clear = ()=>{
    
  Form.actions.clearFields()

}


  const [state, setState] = useState();
  const [Form, setForm] = useState();
  const [data,setData]=useState()
const view = (d)=>{
  
    const y= d;
    const x = y.form;
    const z = JSON.parse(x)
    
        var options =  {
      showActionButtons: false ,
      formData : z
      }; 
      const formBuilder =  $(fb.current).formBuilder(options);
      setForm(formBuilder);
    }
  
   
useEffect(()=>{
  
  const url = "http://localhost:8081/api/form/"+Id.toString()
  axios.get(url).then(res=>view(res.data)).catch(err=>console.log(err))
  //console.log(data)
},[])
   
        return (<div >
          <div class="form-group">
    {/* <label for="formGroupExampleInput">Titre</label>
    <input value={this.state.titre} type="text" class="form-control" placeholder="Titre"  onChange={(e)=> this.handleChange(e)}/>
    <label for="formGroupExampleInput">Type</label>
    <input value={this.state.type} type="text" class="form-control"  placeholder="Type" onChange={(e)=>this.handleChange1(e)}/> */}
  </div>
          <div class="news" id='hatem'  ref={fb}>
          
          
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button id='clear' onClick={(e) => clear(e)} type="button" class="btn btn-danger" >clear</button> 
        <button id = 'save' onClick={(e) => save(e)} type="button" class="btn btn-primary">Save</button>
        
        </div>

    </div>);
    }
    

export default FormUpdate;