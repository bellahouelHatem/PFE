import React, { Component }  from "react";
import '../App.css';


var d = [{"id":"aef89483-8ab4-4f8e-98c6-1c16212a71ab","element":"Checkboxes","label":{"blocks":[{"key":"a9mh5","text":"Placeholder Label","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}},"required":false,"options":[{"id":"818509c4-95db-489f-ab2b-4c08677d33a0","value":"hatem","checked":false},{"id":"aa7bfa45-2a2d-40e1-964e-750d8b55b625","value":"bellahouel","checked":false},{"id":"bd932a48-50fd-4e75-8f00-eaa317168ad4","value":"hatem","checked":false},{"id":"04037ecb-de9e-47af-9722-3e2c39298f3e","value":"c c","checked":false},{"id":"e340a27f-8a61-4da8-a50c-99cdfbf572ee","value":"c  ","checked":false}]}];
var x = JSON.stringify(d);
var y = x.length;
export default class Home  extends Component {
    render() { 
        return (<div >
            <h1>{y}</h1>
                
                </div>);
    }
}
 