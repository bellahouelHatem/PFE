import FormInspectorInput from "./FormInput";
import { useState } from "react";
import '../../App.css';
import { format } from 'date-fns'
import axios from "axios";

function FormInspector() {
  const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({id:"",title:"",startDate:"",endDate:""});
      const handleFocus = (e) => {
        setFocused(true);
      };
      
      const [type,setType]=useState()
      const today =format(new Date(), 'yyyy-MM-dd');

      const inputs = [
        {
            id: 1,
            name: "UserName",
            type: "text",
            placeholder: "Email",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Email",
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
            required: true
        },
        {
            id: 2,
            name: "FirstName",
            type: "text",
            placeholder: "First name",
            errorMessage:
                "First name should be 3-16 characters and shouldn't include any special character!",
            label: "First name",
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 3,
            name: "LastName",
            type: "text",
            placeholder: "Last name",
            errorMessage:
                "First name should be 3-16 characters and shouldn't include any special character!",
            label: "Last name",
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 4,
            name: "PhoneNumber",
            type: "text",
            placeholder: "Phone number",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Phone number",
            pattern: "\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$",
            required: true
        },
        {
          id: 5,
          name: "PAss",
          type: "text",
          placeholder: "Password",
          errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Password",
          pattern: "\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$",
          required: true
      }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
          const body = {
            userName : values["UserName"],
            firstName:values["FirstName"],
            lastName:values["LastName"],
            phoneNumber:values["PhoneNumber"],
            password:values["PAss"]             
          }
          console.log(body)
         axios.post('http://localhost:8081/api/inspector',body,{  headers: {'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem("token")}}).then(resp=>console.log(resp.data)).catch(err=>console.log(err))
        // window.location.reload(true);
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      /* const onChangeSelect = (e)=>{
        setType({type: e.target.value})
      }
      const onChangeEndDate = (e) => {
        if(e.target.value>values.startDate){
        setValues({ ...values, [e.target.name]: e.target.value });
    }else
    {inputs[3].errorMessage= "the end Date should be after the start Date"  }  ;} */
      return (
        <div className="app">
          <form className="formInput" >{/* onSubmit={handleSubmit}> */}
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInspectorInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={(e)=>{onChange(e)}}
              />
            ))}
            {/* <label>Type</label>
            <select   onBlur={handleFocus} required as="select" onChange={onChangeSelect} aria-label="Default select example" focused={focused.toString()}>
              <option value="">...</option>
              <option value="Food">Food</option>
              <option value="Server Room">Server Room</option>
            </select>
            <span className="span">you need to select a type</span> */}
            <button className="button" onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </div>
      );
    };
    

export default FormInspector;