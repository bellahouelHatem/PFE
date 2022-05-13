import React, { Component }  from "react";
import Home from "./Home";
import Formulaire from "./DynamicForm/Formulaire";
import SafetyStandardsForm from './StaticForm/SafetyStandardsForm';
import StaticForms from "./StaticForm/StaticForms";
import DynamicForms from "./DynamicForm/DynamicForms";
import DformUSE from "./DynamicForm/DformUSE";
import ServerRoomInspectionForm from "./StaticForm/ServerRoomInspectionForm";
import Planing from"./PlanInspection/PlaningInsp"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FormUpdate from "./DynamicForm/FormUpdate";
import FormInspecteur from "./PlanInspection/Inspection/FormInspection";
import PlaningAction from "./PlanInspection/PlaningAction";
import PlaningInsp from "./PlanInspection/PlaningInsp";

export default class Routes  extends Component {
    render() { 
        return (
          <Router>
          <Switch>
          <Route path="/Home" element={Home}/>
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
}
 