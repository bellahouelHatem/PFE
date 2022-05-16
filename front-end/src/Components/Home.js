import React,{createRef, useEffect}  from "react";
import $ from "jquery";
import '../App.css';
import { useLocation } from "react-router-dom";
window.jQuery = $;
window.$ = $;
require("jquery-ui-sortable");
require('formBuilder/dist/form-render.min.js');
 
function Home(props) {
  const location= useLocation();
  const {data}=location.state;
    
    var formRenderOptions = {
        formData: JSON.parse(data),
    dataType:'json' }
    const fb = createRef();
    useEffect(()=>{const formBuilder = $(fb.current).formRender(formRenderOptions);
})
    return (
      <div  ref={fb}>

        </div>
        
        
      
    );
  }
  export default Home;

