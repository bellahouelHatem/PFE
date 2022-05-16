import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import App from "../../App";
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");

function DynamicForms()   {
  const [state, setState] = useState([])
  //delete button function
 const Delete = (id)=>{
  const url = 'http://localhost:8081/api/form/'+id.toString()
  axios.delete(url)
  window.location.reload(false);
}
  
    
   //getting the data from the database
  useEffect(() => {
    fetch('http://localhost:8081/api/Forms').then(resp=>resp.json()).then(resp=>setState(resp))
    },[])
    
        return(
          <>
          <App/>
        <div>
           <Link  to="/Formulaire"><button id = 'save' type="button" class="btn btn-primary">Add Form</button></Link>
           {/* presenting the data in a tabel */}
          <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Titre</th>
            <th scope="col">Type</th>
            <th scope="col">Date de creation</th>
            <th scope="col"></th>
            
          </tr>
       </thead>
        <tbody>
            {state.map(Form=>           
                <tr>
                <td>{Form.id}</td>
                <td>{Form.titre}</td>
                <td>{Form.type}</td>
                <td>{Form.dateCreation}</td>
                <td><div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  
                   <button id='clear' onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?'))  Delete(Form.id)}} type="button" class="btn btn-danger" >Delete</button>
                  {/* the routing button to the FormUpdate Component */}
                    <Link  to="/updateForm" state={{Id:Form.id,titre:Form.titre,type:Form.type
                    }}><button id = 'save' type="button" class="btn btn-primary">Edit</button></Link>
                </div>
                </td>
                <td><div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    {/* the routing button to the FormUpdate Component */}
                    <Link  to="/home" state={{data:Form.form}}><button  type="button" class="btn btn-primary">use</button></Link>
                </div>
                </td>
              </tr>
                )}
        </tbody> 
      </table>
      </div>
      </>);
    }
export default DynamicForms;