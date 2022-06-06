import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchUserData} from '../../Services/authenticationService';import PageServiceProvider from './PageServiceProvider';


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


export const DashboardClient=(props)=>{ const currentLanguageCode = cookies.get('i18next') || 'en'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
const { t } = useTranslation()
    const url='http://localhost:8083/api/Inspections'
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
       <PageServiceProvider/>
       <div>
           <table class="table table-sm">
        <thead>  <tr>
            <th scope="col" className="border-0">{t("id")}</th>
            <th scope="col" className="border-0">{t("Titre")}</th>
            <th scope="col" className="border-0">{t("Type")}</th>
            <th scope="col" className="border-0">{t("date")}</th>
            <th scope="col" className="border-0"></th>
            
          </tr>
       </thead>
        <tbody>
            {data.map(insp=>           
            insp.type==="RiskManagement"||insp.type==="GAPAnalysis"&&<>
                <tr>
                <td>{insp.id}</td>
                <td>{insp.title}</td>
                <td>{insp.type}</td>
                <td>{insp.endDate}</td>
                <td><div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link  to={{pathname:"/Results", state:{data:insp}}} ><button id = 'save' type="button" class="btn btn-primary">Results</button></Link>
                </div>
                </td>
              </tr>
              </>
                )}
        </tbody> 
      </table>
       </div>
       </>
    )
}