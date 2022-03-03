import React, { Component, createRef } from "react";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");
  require("formBuilder");

  const d = new Date().toISOString().slice(0, 10);

var options =  {
 
     showActionButtons: false 

     };




class Formulaire  extends Component {
  constructor(){
    super();
    this.state={
      titre:"",
      type:""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  fb = createRef();

  
  componentDidMount() {

       this.setState({form : $(this.fb.current).formBuilder(options)})
    
  }
  clear(){
    
      this.state.form.actions.clearFields()
   
   } 
   handleChange(event) {
    this.setState({titre: event.target.value});
  } handleChange1(event) {
    this.setState({type: event.target.value});
  }

   save(e)   {
     var data = JSON.stringify(this.state.form.actions.getData('json', true))
    
     
     var body = {form : data,
      type: this.state.type,
      titre: this.state.titre,
      dateCreation:d
    }
     fetch('http://localhost:8081/api/Form',{
       method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)})
    .then(res=>{alert()})
  }
    render() { 
        return (<div >
          <div class="form-group">
    <label for="formGroupExampleInput">Titre</label>
    <input value={this.state.titre} type="text" class="form-control" placeholder="Titre"  onChange={(e)=> this.handleChange(e)}/>
    <label for="formGroupExampleInput">Type</label>
    <input value={this.state.type} type="text" class="form-control"  placeholder="Type" onChange={(e)=>this.handleChange1(e)}/>
  </div>
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