import React, { createRef, useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import PageInspector from "../dashboards/PageInspector";

 window.jQuery = $;
 window.$ = $;
 require("jquery-ui-sortable");
  require("formBuilder");
  
  
function FormUpdate (props) {

  const id = props.location.state.data;
  const [Form, setForm] = useState();
  const [Type,setType]=useState();
  const [Titre,setTitre]=useState();
  const location= useLocation();
 

  //input change Holder
  const  handleChangeTitre= (event)=> {
    setTitre(event.target.value);
  } 

  //input change Holder
  const handleChangeType = (event) =>{
    setType( event.target.value);
  }
  
  
  const fb = createRef();




  //save the changes
   const edit = ()=>  {
     const url = 'http://localhost:8082/api/Forms/'+id
    var data = JSON.stringify(Form.actions.getData('json', true))
    var Body = {
      form : data,
      type: Type,
      titre: Titre
        }
   axios.put(url,Body).catch(err=>console.log(err))
  
 }
 //effacer le contenu du FormBuilder
 const clear = ()=>{
    
  Form.actions.clearFields()

}


  
//getting the data by id from the databse method
const view = (d)=>{
    const y= d;
    console.log(y)
    const x = y.form;
    const DataForm = JSON.parse(x);
    var options =  {
      showActionButtons: false ,
      formData : DataForm,
      disableFields:  [
        'autocomplete',
        'file',
        'hidden',
        'button'
      ]
    }; 

    //genereiting the form from the data
    const formBuilder =  $(fb.current).formBuilder(options);
    //saving the formData
    setForm(formBuilder);
    setTitre(y.titre);
    setType(y.type);
  }
  
   
useEffect(()=>{
  
  console.log(id)
  const url = "http://localhost:8082/api/Forms/"+id
  axios.get(url).then(res=>view(res.data)).catch(err=>console.log(err))
  
},[])
   
        return (
          <>
          <PageInspector/>
        <div >
          
           <div class="form-group">
                 <label for="formGroupExampleInput">Titre</label>
                 <input value={Titre}   type="text" class="form-control" placeholder="Titre"  onChange={(e)=>handleChangeTitre(e)}/>
                 <label for="formGroupExampleInput">Type</label>
                 <input value={Type}  type="text" class="form-control"  placeholder="Type" onChange={(e)=>handleChangeType(e)}/>
           </div>

           {/* creating the FormBuilder */}
           <div class="news" id='hatem'  ref={fb}></div>



           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                 <button id='clear' onClick={(e) => clear(e)} type="button" class="btn btn-danger" >Delete</button> 
                 <Link reloadDocument={true} to="/DynamicForms">
                  <button id = 'save' onClick={(e) => edit(e)} type="button" class="btn btn-primary">Edit</button>
                 </Link>
           </div>

         </div>
         </>
         );
    }
    

export default FormUpdate;