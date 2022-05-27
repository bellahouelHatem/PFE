import React, { useEffect, useState } from "react";
import { format } from 'date-fns'
import axios from "axios";
import "../../Inspector/Form.css";
import jwtDecode from "jwt-decode";

function FormAction() {
  const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({id:"",title:"",startDate:"",endDate:""});
      const handleFocus = (e) => {
        setFocused(true);
      };
      
      const [type,setType]=useState()
      const today =format(new Date(), 'yyyy-MM-dd')

     const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const Dtoken = jwtDecode(token)
       const Cid =Dtoken["sub"];
          const body = {
            title : values["title"],
            description:type["type"],
            startDate:values["startDate"],
            endDate:values["endDate"],
            clientUN:Cid           
          }
          console.log(body)
         axios.post('http://localhost:8084/api/Action',body).catch(err=>console.log(err))
         window.location.reload(true);
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const onChangeSelect = (e)=>{
        setType({type: e.target.value})
      }
      useEffect(() => {
        setValues({id:"",title:"",startDate:new Date(),endDate:""});
       
      }, [])
    
      return (
          <>
        <div className="app">
          <form className="formInput" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>title</label>
        <input onChange={(e)=>onChange(e)} name="title" type= "text" errorMessage="required" label= "Title" required ></input>
        <label>Start Date</label> 
           <input onChange={(e)=>onChange(e)} name="startDate" type= "date" min ={ today} placeholder= "End Date"berrorMessage="required"label= "End Date" required value={values.startDate} ></input>
         {values.startDate&&(<React.Fragment>
          <label>End Date</label>
            <input onChange={(e)=>onChange(e)} name="endDate" type= "date" min ={values.startDate} placeholder= "End Date" errorMessage="required" label= "End Date" required value={values.endDate} ></input>
            </React.Fragment>)}
            <label>Description</label>
            <textarea errorMessage="hiiii" focused={focused.toString()} onChange={onChangeSelect}
        onBlur={handleFocus} name="Decreption"  required ></textarea>
            <span className="span">you need to select a type</span>
            <button className="button">Submit</button>
          </form>
        </div>
        </>
      );
    };
    

export default FormAction;