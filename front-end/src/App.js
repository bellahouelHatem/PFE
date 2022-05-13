import './App.css';
import Page from './Components/page';
import ReactDOM from "react-dom";
import React  from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormUpdate from "./Components/DynamicForm/FormUpdate";
import FormInspecteur from "./Components/PlanInspection/Inspection/FormInspection";
import PlaningAction from "./Components/PlanInspection/PlaningAction";
import PlaningInsp from "./Components/PlanInspection/PlaningInsp";
import Home from './Components/Home';
import Formulaire from './Components/DynamicForm/Formulaire';
import StaticForms from './Components/StaticForm/StaticForms';
import DynamicForms from './Components/DynamicForm/DynamicForms';
import SafetyStandardsForm from './Components/StaticForm/SafetyStandardsForm';
import ServerRoomInspectionForm from './Components/StaticForm/ServerRoomInspectionForm';
import DformUSE from './Components/DynamicForm/DformUSE';
function App() {
  return (
       <Router>
         
       <Page></Page>
          <Switch>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Formulaire" component={Formulaire}/>
                <Route path="/StaticForms" component={StaticForms}/>
                <Route path="/DynamicForms" component= {DynamicForms}/>
                <Route path="/SafetyStandardsForm" component={SafetyStandardsForm}/>
                <Route path="/updateForm" component={FormUpdate}/>
                <Route path="/ServerRoomInspectionForm" component={ServerRoomInspectionForm}/>
                <Route path="/DynamicFormUse" component={DformUSE}/>
                <Route path="/IsnpecteurForm" component={FormInspecteur}/>
                <Route path="/planing" component={PlaningInsp}/>
                <Route path="/planingAction" component={PlaningAction}/>
              </Switch>
              
          </Router>
      
      
     
      
      
    
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
