import React, { Component, createRef, useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import PageInspector from "../dashboards/PageInspector";
import axios from "axios";
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");
  require("formBuilder");
//getting the date to save it
  const d = new Date().toISOString().slice(0, 10);

var options =  {
 
     showActionButtons: false 

     };




function Formulaire(props){
 
  const fb = createRef();
  const [focused, setFocused] = useState(false);
  const [state,setState]=useState();
  const [Type,setType]=useState();
  const [Titre,setTitre]=useState();

  
  useEffect(()=> {
    const token = localStorage.getItem("token")
        if(token == null){
          props.history.push('/'); 
        }else{
          const Dtoken =jwtDecode(token) 

           if (Dtoken["iss"]=== "Administrator"){
             props.history.push('/PageAdmin');
          }else if(Dtoken["iss"]=== "ServiceProvider"){
            props.history.push('/PageServiceProvider');
      }else{
        setState({form : $(fb.current).formBuilder(options)})
        }
    }
    
  },[])
 const clear= () =>{
    
      state.form.actions.clearFields()
   
   } 
   const  handleChangeTitre= (event)=> {
    setTitre(event.target.value);
  }  
  const onChangeSelect = (e)=>{
    setType( e.target.value)
  }
  const handleFocus = (e) => {
    setFocused(true);
  };

   const save = (e) =>  {
     const data = JSON.stringify(state.form.actions.getData('json', true))  
     const body = {form : data,
      type: Type,
      titre: Titre,
      dateCreation:d
    }
  
     axios.post('http://localhost:8082/api/Forms',body)
    .then(res=>{alert()})
  }
    
        return (
          <>
          <PageInspector/>
        <div >
          <div class="form-group">
             <label for="formGroupExampleInput">Titre</label>
             <input value={Titre} type="text" class="form-control" placeholder="Titre"  onChange={(e)=>handleChangeTitre(e)}/>
             <label for="formGroupExampleInput">Type</label>
             <select   onBlur={handleFocus} required as="select" onChange={onChangeSelect} aria-label="Default select example" focused={focused.toString()}>
              <option value="">...</option>
              <option value="GAPAnalysis">GAP Analysis</option>
              <option value="RiskManagement">Risk Management</option>
            </select>
          </div>
           {/* creating the FormBuilder */}
          <div class="news" id='hatem'  ref={fb}></div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button id='clear' onClick={(e) => clear(e)} type="button" class="btn btn-danger" >clear</button> 
             <Link reloadDocument={true} to={{pathname:"/"+props.location.state.link,state:{type:props.location.state.type}}}><button id = 'save' onClick={(e) => save(e)} type="button" class="btn btn-primary">Save</button></Link>
        
          </div>
        </div>
        </>
    );
    }
export default Formulaire;