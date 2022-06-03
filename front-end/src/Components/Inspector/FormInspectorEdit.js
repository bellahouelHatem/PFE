import FormInspectorInput from "./FormInput";
import { useEffect, useState } from "react";
import '../../App.css';
import { format } from 'date-fns'
import axios from "axios";
import jwtDecode from "jwt-decode";
import PageAdmin from "../dashboards/PageAdmin";

import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { Alert } from "react-bootstrap";
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
function FormInspectorEdit(props) {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  const data =props.history.location.state.data;
  const [focused, setFocused] = useState(false);
  
    const [values, setValues] = useState(data);
      const handleFocus = (e) => {
        setFocused(true);
      };
      
      const [type,setType]=useState()
      const today =format(new Date(), 'yyyy-MM-dd');

      const inputs = [
        {
            id: 2,
            name: "firstName",
            type: "text",
            placeholder: t("FirstName"),
            errorMessage:
                "First name should be 3-16 characters and shouldn't include any special character!",
            label: t("FirstName"),
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 3,
            name: "lastName",
            type: "text",
            placeholder:t("LastName"),
            errorMessage:
                "First name should be 3-16 characters and shouldn't include any special character!",
            label: t("LastName"),
            pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
            required: true
        },
        {
            id: 4,
            name: "phoneNumber",
            type: "text",
            placeholder:  t("PhoneNumber"),
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label:  t("PhoneNumber"),
            pattern: "\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$",
            required: true
        }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();

          const body = {
            firstName:values["firstName"],
            lastName:values["lastName"],
            phoneNumber:values["phoneNumber"]         
          }
          console.log(body)
            axios.put('http://localhost:8081/api/inspectors/'+values["id"],body,{  headers: {'Content-Type': 'application/json','Authorization': 'Bearer '+localStorage.getItem("token")}}).catch(err=>console.log(err))
            props.history.push("/Home")
           
            
          } ;
      
    
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
    useEffect(()=>{
      const token = localStorage.getItem("token");
      
        if(token== null){
          props.history.push('/'); 
        }else{
          const Dtoken =jwtDecode(token) ;
          console.log(Dtoken)
           if(Dtoken["iss"]=== "Inspector"){
          props.history.push('/PageInspector');
      }else if(Dtoken["iss"]=== "ServiceProvider"){
          props.history.push('/PageServiceProvider');
      }}
    },[])
      return (<><PageAdmin/>
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

            <button className="button" onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </div>
        </>
      );
    };
    

export default FormInspectorEdit;