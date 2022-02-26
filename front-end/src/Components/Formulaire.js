import React, { Component, createRef } from "react";
import $ from "jquery";
import axios from "axios";
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");
  require("formBuilder");

var options =  {
 
     showActionButtons: false 

     };




class Formulaire  extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  fb = createRef();

  
  componentDidMount() {

       this.setState({form : $(this.fb.current).formBuilder(options)})
    
  }
  clear(){
    
      this.state.form.actions.clearFields()
   
   } 
   save()   {
     var data = JSON.stringify(this.state.form.actions.getData('json', true))
     var body = {form : data}
     fetch('http://localhost:8081/api/Form',{
       method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)})
    .then(res=>{alert()})
    //  axios.post("http://localhost:8081/api/Form",{
    //    Form:
    //  }
    
   }
    
  

    render() { 
        return (<div >
          <div class="news" id='hatem'  ref={this.fb}>
          
          
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button id='clear' onClick={(e) => this.clear(e)} type="button" class="btn btn-danger" >clear</button> 
        <button id = 'save' onClick={(e) => this.save(e)} type="button" class="btn btn-primary">Save</button>
        
        </div>

    </div>);
    }
    
}
export default Formulaire;