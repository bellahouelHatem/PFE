import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import $ from "jquery";
import { formatMs } from "@material-ui/core";
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");

function Forms()   {
  const [state, setState] = useState([])
  
    
   //getting the data from the database
  useEffect(() => {
    fetch('http://localhost:8081/api/Forms').then(resp=>resp.json()).then(resp=>setState(resp))
    },[])
    
        return(<div>
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
                  
                    <button id='clear' onClick={(e) => this.clear(e)} type="button" class="btn btn-danger" >Delete</button> 
                  {/* the routing button to the FormUpdate Component */}
                    <Link  to="/updateForm" state={{Id:Form.id,titre:Form.titre,type:Form.type,date:Form.dateCreation
                    }}><button id = 'save' type="button" class="btn btn-primary">Edit</button></Link>
                </div>
                </td>
              </tr>
                )}
        </tbody> 
      </table></div>);
    }
export default Forms;