import React, {  useEffect,useState } from "react";
import '../../../App.css';
import { format } from 'date-fns'
import axios from "axios";
import App from "../../../App";
import jwtDecode from "jwt-decode";
function FormInspection() {
  const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({id:"",title:"",startDate:"",endDate:""});
    const [inspectors,setInspectors]=useState([{}]);
    const [inspector,setInspector]=useState();

      const handleFocus = (e) => {
        setFocused(true);
      };
      
      const [type,setType]=useState()
      const today =format(new Date(), 'yyyy-MM-dd');

      const inputs = [
        {
          id: 1,
          name: "title",
          type: "text",
          placeholder: "title",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "title",
          pattern: "^[A-Za-z]{3,16}$",
          required: true
        },
        {
          id: 2,
          name: "StartDate",
          type: "date",
          min: today,
          placeholder: "Start Date",
          errorMessage:"required",
          label: "Start Date",
          pattern: today,
          required: true
        },{
          id: 3,
          name: "EndDate",
          type: "date",
          min:  new Date(Date.parse(values.startDate)),
          placeholder: "End Date",
          errorMessage:"required",
          label: "End Date",
          required: true
        }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const Dtoken = jwtDecode(token)
       const Cid =Dtoken["sub"];
       console.log(Cid)
          const body = {
            title : values["title"],
            type:type,
            startDate:values["startDate"],
            endDate:values["endDate"],
            clientUN:Cid,
            inspUN:inspector         
          }
          console.log(body)
          axios.post('http://localhost:8083/api/Inspection',body).catch(err=>console.log(err))
          window.location.reload(true);
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const onChangeSelect = (e)=>{
        setType( e.target.value)
      }
      const onChangeSelect1 = (e)=>{
        setInspector(e.target.value)
      }
    useEffect(() => {
      setValues({id:"",title:"",startDate:new Date(),endDate:""});
      const token = localStorage.getItem("token")
            console.log(token)
            axios({
              method:'GET',
              url:'http://localhost:8081/api/inspectors',
              headers:{
                  'Authorization':'Bearer '+token}}).then((resp)=>{setInspectors(resp.data)})
    
     
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
            <label>Type</label>
            <select   onBlur={handleFocus} required as="select" onChange={onChangeSelect} aria-label="Default select example" focused={focused.toString()}>
              <option value="">...</option>
              <option value="Food">Food</option>
              <option value="Server Room">Server Room</option>
            </select>
            <select   onBlur={handleFocus} required as="select" onChange={onChangeSelect1} aria-label="Default select example" focused={focused.toString()}>
              <option value="">inspector Name : nombre of inspection done</option>
              {inspectors.map(inspector=>
              <option value={inspector.username}>{inspector.firstName}:{inspector.inspectionsNumber}</option>)}
            </select>
            <span className="span">you need to select a type</span>
            <button className="button">Submit</button>
          </form>
        </div>
        </>
      );
    };
    

export default FormInspection;