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

function DynamicFormsType(props)   {
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
    console.log(props.location.state.id)
    const token = localStorage.getItem("token");
        if(token === null){
          props.history.push('/'); 
        }else{
          const Dtoken =jwtDecode(token) 

           if (Dtoken["iss"]=== "Administrator"){
             props.history.push('/PageAdmin');
          }else if(Dtoken["iss"]=== "ServiceProvider"){
            props.history.push('/PageServiceProvider');
      }else{ axios.get('http://localhost:8082/api/FormsT/'+props.location.state.type).then(resp=>setState(resp.data));}
    }
   
    
    },[])
    
        return(
          <>
          <PageInspector/>
        <div>
            <h1>the client need a {props.location.state.type} inspection</h1>
           <Link  to={{pathname:"/Formulaire", state:{link:"DynamicFormType",type:props.location.state.type}}}><button id = 'save' type="button" class="btn btn-primary">Add Form</button></Link>
           {/* presenting the data in a tabel */}
          <table class="table table-sm">
        <thead>
        <tr>
            <th scope="col">{t("id")}</th>
            <th scope="col">{t("Titre")}</th>
            <th scope="col">{t("Type")}</th>
            <th scope="col">{t("Creation_date")}</th>
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
                    {/* the routing button to the FormUpdate Component */}
                    <Link  to={{pathname:"/DFormUse", state:{data:Form.form,id:props.location.state.id}}}><button  type="button" class="btn btn-primary">use</button></Link>
                </div>
                </td>
              </tr>
                )}
        </tbody> 
      </table>
      </div>
      </>);
    }
export default DynamicFormsType;