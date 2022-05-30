import RegistrationInput from "./RegistrationInput";
import { useState } from "react";
import '../../App.css';
import { format } from 'date-fns'
import axios from "axios";

function Registration() {
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
            name: "Name",
            type: "text",
            placeholder: "Company name",
            errorMessage:
                "Company name should be 3-16 characters and shouldn't include any special character!",
            label: "Company name",
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 2,
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
            id: 3,
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
            id: 4,
            name: "Location",
            type: "text",
            placeholder: "Location",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Location",
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 5,
            name: "Password",
            type: "text",
            placeholder: "Password",
            errorMessage:
                "Password should be 3-16 characters and shouldn't include any special character!",
            label: "Password",
            pattern: "\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$",
            required: true
      }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
          const body = {
            name : values["Name"],
            userName:values["UserName"],
            phoneNumber:values["PhoneNumber"],
            location:values["Location"],
            password:values["Password"]             
          }
          console.log(body)
         axios.post('http://localhost:8081/api/registration',body).then(resp=>console.log(resp.data)).catch(err=>console.log(err.response.data.error))
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      return (
        <div className="app">
          <form className="RegistrationInput" >
            <h1>Register</h1>
            {inputs.map((input) => (
              <RegistrationInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={(e)=>{onChange(e)}}
              />
            ))}
            <button className="button" onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </div>
      );
    };
    

export default Registration;