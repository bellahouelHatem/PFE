import React, { Component , createRef } from "react";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
 require("jquery-ui-sortable");
  require("formBuilder");


var options =  {
 
    // showActionButtons: false // defaults: `true`

    
  };



export default class Formulaire  extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder(options);
  }
  

    render() { 
        return (<div id='hatem' ref ={this.fb}>

    </div>);
    }
}