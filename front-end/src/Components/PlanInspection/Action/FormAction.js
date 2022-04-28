import FormInspecteurInput from "../Inspection/FormInput.js";
import { useState } from "react";
import { format } from 'date-fns'
import axios from "axios";
import "../Inspection/Form.css";

function FormAction() {
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
          name: "title",
          type: "text",
          placeholder: "title",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "title",
          pattern: "*[a-zA-Z,\s]+\s*[3,16]$",
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
          min: values.startDate,
          placeholder: "End Date",
          errorMessage:"required",
          label: "End Date",
          required: true
        }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
          const body = {
            title : values["title"],
            type:type["type"],
            startDate:values["StartDate"],
            endDate:values["EndDate"]           
          }
          console.log(body)
         axios.post('http://localhost:8082/api/Inspection',body).catch(err=>console.log(err))
         window.location.reload(true);
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const onChangeSelect = (e)=>{
        setType({type: e.target.value})
      }
      const onChangeEndDate = (e) => {
        if(e.target.value>values.startDate){
        setValues({ ...values, [e.target.name]: e.target.value });
    }else
    {inputs[3].errorMessage= "the end Date should be after the satart Date"  }  ;}
      return (
        <div className="app">
          <form className="formInput" onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInspecteurInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={(e)=>{if(input.name==="EndDate") {onChangeEndDate(e)}else{onChange(e)}}}
              />
            ))}
            <label>Description</label>
            <textarea errorMessage="hiiii" focused={focused.toString()} onChange={onChangeSelect}
        onBlur={handleFocus} name="Decreption"  required ></textarea>
            <span className="span">you need to select a type</span>
            <button className="button">Submit</button>
          </form>
        </div>
      );
    };
    

export default FormAction;