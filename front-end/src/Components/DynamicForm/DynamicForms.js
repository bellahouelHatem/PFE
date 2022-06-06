import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import jwtDecode from "jwt-decode";
import PageInspector from "../dashboards/PageInspector";
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");
 const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ger',
    name: 'deutsch',
    country_code: 'de',
  },
]
function DynamicForms(props)   {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  const [state, setState] = useState([])
  //delete button function
 const Delete = (id)=>{
  const url = 'http://localhost:8082/api/Forms/'+id.toString()
  axios.delete(url)
  window.location.reload(false);
}
  
    
   //getting the data from the database
  useEffect(() => {

    const token = localStorage.getItem("token");
        if(token === null){
          props.history.push('/'); 
        }else{
          const Dtoken =jwtDecode(token) 

           if (Dtoken["iss"]=== "Administrator"){
             props.history.push('/PageAdmin');
          }else if(Dtoken["iss"]=== "ServiceProvider"){
            props.history.push('/PageServiceProvider');
      }else{ axios.get('http://localhost:8082/api/Forms').then(resp=>setState(resp.data));}
    }
    },[])
    
        return(
          <>
          <PageInspector/>
        <div>
        <div className="loutaymin">
           <Link  to={{pathname:"/Formulaire", state:{link:"DynamicForms"}}}><button id = 'save' type="button" class="btn btn-success kober">{t("add_Form")}</button></Link>
           </div>
           {/* presenting the data in a tabel */}
          <table class="table mb-0 border-bottom mb-4">
        <thead class="bg-light">
          <tr>
            <th scope="col" className="border-0">{t("id")}</th>
            <th scope="col" className="border-0">{t("Titre")}</th>
            <th scope="col" className="border-0">{t("Type")}</th>
            <th scope="col" className="border-0">{t("Creation_date")}</th>
            <th scope="col" className="border-0"></th>
            
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
                  
                   <button id='clear' onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?'))  Delete(Form.id)}} type="button" class="btn btn-danger" >{t("delete")}</button>
                  {/* the routing button to the FormUpdate Component */}
                    <Link  to={{pathname:"/updateForm", state:{data:Form.id}}} ><button id = 'save' type="button" class="btn btn-primary">{t("edit")}</button></Link>
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