import FormInspecteurInput from "./FormInspecteurInput";
import { useState } from "react";
import '../../../App.css';
import { format } from 'date-fns'
import axios from "axios";
function FormInspecteur(props) {
  const {show}= props;
  const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({
      });
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
          required: true,
          value:""
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
          required: true,
          value:""
        },{
          id: 3,
          name: "EndDate",
          type: "date",
          min: today,
          placeholder: "End Date",
          errorMessage:"required",
          label: "End Date",
          required: true,
          value:""
        }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        console.log(type)
          const body = {
            title : values["title"],
            type:type["type"],
            startDate:values["StartDate"],
            endDate:values["EndDate"]           
          }
          console.log(body)
         axios.post('http://localhost:8082/api/Inspection',body).catch(err=>console.log(err))
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const onChangeSelect = (e)=>{
        setType({type: e.target.value})
      }
    
      return (
        <div className="app">
          <form className="formInput" onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInspecteurInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <label>Type</label>
            <select   onBlur={handleFocus} required as="select" onChange={onChangeSelect} aria-label="Default select example" focused={focused.toString()}>
              <option value="">...</option>
              <option value="Food">Food</option>
              <option value="Server Room">Server Room</option>
            </select>
            <span className="span">you need to select a type</span>
            <button className="button">Submit</button>
          </form>
        </div>
      );
    };
    

export default FormInspecteur;