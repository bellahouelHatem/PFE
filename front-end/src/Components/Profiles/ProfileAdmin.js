import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import PageAdmin from "../dashboards/PageAdmin";
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import axios from "axios";
import { Link } from "react-router-dom";
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

  
function ProfileAdmin(props){
    const { t } = useTranslation()
    const [state,setState]=useState([{}]);
    const Delete = (id)=>{
        axios.delete('http://localhost:8081/api/inspectors/'+id,{  headers: {'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem("token")}}).then(window.location.reload(true))
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
            if(token === null){
              props.history.push('/'); 
            }else{
              const Dtoken =jwtDecode(token) 
    
              if(Dtoken["iss"]=== "Inspector"){
                props.history.push('/PageInspector');
            }else if(Dtoken["iss"]=== "ServiceProvider"){
                props.history.push('/PageServiceProvider');
          }else{ axios.get('http://localhost:8081/api/inspectors',{  headers: {'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem("token")}}).then(resp=>setState(resp.data));}
        }
       
        
        },[])


        
        
            return(
              <>
              <PageAdmin/>
              <table class="table mb-0 border-bottom mb-4">
            <thead class="bg-light">
              <tr>
                <th scope="col" className="border-0">{t("id")}</th>
                <th scope="col" className="border-0">{t("Email")}</th>
                <th scope="col" className="border-0">{t("FirstName")}</th>
                <th scope="col" className="border-0">{t("LastName")}</th>
                <th scope="col" className="border-0">{t("PhoneNumber")}</th>
                <th scope="col" className="border-0"></th>
                
              </tr>
           </thead>
            <tbody>
                {state.map(inspe=>           
                    <tr>
                    <td>{inspe.id}</td>
                    <td>{inspe.username}</td>
                    <td>{inspe.firstName}</td>
                    <td>{inspe.lastName}</td>
                    <td>{inspe.phoneNumber}</td>
                    <td><div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      
                       <button id='clear' onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?'))  Delete(inspe.id)}} type="button" class="btn btn-danger" >{t("delete")}</button> 
                      {/* the routing button to the FormUpdate Component */}
                        <Link  to={{pathname:"/FormInspectorEdit", state:{data:inspe}}} ><button id = 'save' type="button" class="btn btn-primary">{t("edit")}</button></Link>
                    </div>
                    </td>
                  </tr>
                    )}
            </tbody> 
          </table>
          </>);
        }
        export default ProfileAdmin;