import RegistrationInput from "./RegistrationInput";
import { useState } from "react";
import '../../App.css';
import { format } from 'date-fns'
import axios from "axios";
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
function Registration(props) {
  
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
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
            placeholder: t("CompanyName"),
            errorMessage:
                "Company name should be 3-16 characters and shouldn't include any special character!",
            label: t("CompanyName"),
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 2,
            name: "UserName",
            type: "text",
            placeholder: t("Email"),
            errorMessage:
                "Please enter a valid mail",
            label: t("Email"),
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
            required: true
        },
        {
            id: 3,
            name: "PhoneNumber",
            type: "text",
            placeholder: t("PhoneNumber"),
            errorMessage:
                "Please enter a valid PhoneNumber!",
            label: t("PhoneNumber"),
            pattern: "\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$",
            required: true
        },
        {
            id: 4,
            name: "Location",
            type: "text",
            placeholder: t("Location"),
            errorMessage:
                "Location name should be 3-16 characters and shouldn't include any special character!",
            label: "Location",
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 5,
            name: "Password",
            type: "text",
            placeholder: t("PAss"),
            errorMessage:
                "Password should be at least 8 characters and should include  at least one letter and one number!",
            label: t("PAss"),
            pattern: "*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
            required: true
      }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        var exist = false;
          const body = {
            name : values["Name"],
            userName:values["UserName"],
            phoneNumber:values["PhoneNumber"],
            location:values["Location"],
            password:values["Password"]             
          } 
          axios.get("http://localhost:8081/api/user").then(resp=>{
            console.log(resp.data)
          resp.data.map(user=>{
              console.log(values["UserName"])
              if(user.username === values["UserName"]){
                exist = true;
                return
              }
              
            })
            if(exist){
              alert("this Email is taken")
            }else{
          console.log(body)
          alert("Email has been send to you. Thank you")
         axios.post('http://localhost:8081/api/registration',body).then(resp=>console.log(resp.data)).catch(err=>console.log(err.response.data.error))
         props.history.push("/")
      };})}
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      return (
        
        <div className="login-page formInput">          
        <section className="h-100">
        <div className="container h-100">
       
        <div className="card-wrapper">
                    <div className="card fat">
                        <div className="card-body">
        <div className="app">
          <form className="formInput" onSubmit={handleSubmit} >
            <h1>Register</h1>
            {inputs.map((input) => (
              <RegistrationInput 
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={(e)=>{onChange(e)}}
              />
            ))}
            <button className="btn btn-primary" >Sign in</button>
          </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>
        
        
      );
    };
    

export default Registration;