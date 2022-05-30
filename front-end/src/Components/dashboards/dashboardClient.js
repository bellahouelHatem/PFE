import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchUserData} from '../../Services/authenticationService';import PageServiceProvider from './PageServiceProvider';
;




export const DashboardClient=(props)=>{
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
                    <Link  to={{pathname:"/Results", state:{data:insp}}} ><button id = 'save' type="button" class="btn btn-primary">Results</button></Link>
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