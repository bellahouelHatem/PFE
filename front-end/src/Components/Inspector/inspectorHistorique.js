import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PageInspector from '../dashboards/PageInspector';
;




export const InspectorHitorique=(props)=>{
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
            <th scope="col">id</th>
            <th scope="col">Titre</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
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
                    <Link  to={{pathname:"/GAPAnalysisEdit", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">Edit Results</button></Link>
                    <Link  to={{pathname:"/GAPAnalysisEditConfirm", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">Confirm Results</button></Link></>}
                    {insp.type==="RiskManagement"&&<>
                    <Link  to={{pathname:"/RiskManagementEdit", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">Edit Results</button></Link>
                    <Link  to={{pathname:"/RiskManagementConfirm", state:{id:insp.id}}} ><button id = 'save' type="button" class="btn btn-primary">Confirm Results</button></Link></>}
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