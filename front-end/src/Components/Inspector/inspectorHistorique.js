import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PageInspector from '../dashboards/PageInspector';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';


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

export const InspectorHitorique=(props)=>{
  const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    const url='http://localhost:8083/api/InspectionsIR'
    const [data,setData]=useState([]);
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const Dtoken = jwtDecode(token)
       const Cid =Dtoken["sub"];
       console.log(Cid);
    axios.get(url+"/"+Cid).then(resp=>{console.log(resp.data);
        setData(resp.data)})
    
    },[])

    return (
       <>
       <PageInspector/>
       <div>
           <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">{t("id")}</th>
            <th scope="col">{t("Titre")}</th>
            <th scope="col">{t("Type")}</th>
            <th scope="col">{t("date")}</th>
            <th scope="col"></th>
            
          </tr>
       </thead>
        <tbody>
            {data.map(insp=>           
                <tr>
                <td>{insp.id}</td>
                <td>{insp.title}</td>
                <td>{insp.type}</td>
                <td>{insp.endDate}</td>
                <td><div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    {insp.type==="GAPAnalysis"&&<>
                    <Link  to={{pathname:"/GAPAnalysisEdit", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">{t("EditR")}</button></Link>
                    <Link  to={{pathname:"/GAPAnalysisEditConfirm", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">{t("confirmR")}</button></Link></>}
                    {insp.type==="RiskManagement"&&<>
                    <Link  to={{pathname:"/RiskManagementEdit", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">{t("EditR")}</button></Link>
                    <Link  to={{pathname:"/RiskManagementConfirm", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">{t("confirmR")}</button></Link></>}
                </div>
                </td>
              </tr>
                )}
        </tbody> 
      </table>
       </div>
       </>
    )
}