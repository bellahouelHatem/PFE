import FormInspecteurInput from "./FormInspecteurInput";
import { useState } from "react";
import '../../../App.css';
import { format } from 'date-fns'
import { Label } from "reactstrap";
import { Form } from "react-bootstrap";
function FormInspecteur() {
    const [values, setValues] = useState({
        username: "",
        StartDate: "",
      });
      const [type,setType]=useState()
      const today =format(new Date(), 'yyyy-MM-dd');

      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
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
          name: "End Date",
          type: "date",
          min: today,
          placeholder: "End Date",
          errorMessage:"required",
          label: "End Date",
          required: true
        }
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        console.log(type)
        console.log (values.StartDate>today)
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const onChangeSelect = (e)=>{
        setType({type: e.target.value})
      }
    
      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
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
            <Form.Control required as="select" onChange={onChangeSelect} aria-label="Default select example">
              <option value="">...</option>
              <option value="One">One</option>
              <option value="One">Two</option>
              <option value="One">Three</option>
            </Form.Control>
            <span className="span">you need to select a type</span>
            <button className="button">Submit</button>
          </form>
        </div>
      );
    };
    

export default FormInspecteur;