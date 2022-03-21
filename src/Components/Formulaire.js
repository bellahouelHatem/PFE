import React, { Component } from "react";
import { FormBuilder } from "cb-react-forms";

export default class Formulaire  extends Component {
    
    render() { 
        return (<div>
      <FormBuilder onSubmit={//data => console.log(data);
      data => alert(data)} />
    </div>);
    }
}