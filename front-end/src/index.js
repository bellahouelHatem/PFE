import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import LoginPage from './Components/Login/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home';
import Formulaire from './Components/DynamicForm/Formulaire';
import StaticForms from './Components/StaticForm/StaticForms';
import DynamicForms from './Components/DynamicForm/DynamicForms';
import DformUSE from './Components/DynamicForm/DformUSE';
import FormUpdate from './Components/DynamicForm/FormUpdate';
import RiskManagementForm from './Components/StaticForm/RiskManagementForm';

import RiskManagementConfirm from './Components/StaticForm/RiskManagementConfirm';
import GAPAnalysisForm from './Components/StaticForm/GAPAnalysisForm';

import RiskManagementEdit from './Components/StaticForm/RiskManagementEdit';
import GAPAnalysisEdit from './Components/StaticForm/GAPAnalysisEdit';
import FormInspector from './Components/Inspector/FormInspector';
import PlaningInsp from './Components/Plan/PlaningInsp';
import PlaningAction from './Components/Plan/PlaningAction';
import PageInspector from './Components/dashboards/PageInspector';
import PageAdmin from './Components/dashboards/PageAdmin';
import PageServiceProvider from './Components/dashboards/PageServiceProvider';
import inspectorPlan from './Components/Inspector/inspectorPlan';
import DynamicFormsType from './Components/DynamicForm/DynamicFormsType';
import { DashboardClient } from './Components/dashboards/dashboardClient';
import { InspResults } from './Components/InspResults';
import { InspectorHitorique } from './Components/Inspector/inspectorHistorique';
import GAPConfirm from './Components/StaticForm/GAPConfirm';

const MyAppWithStore = () => (
  <>
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={LoginPage}/>
    <Route exact path="/registration" component={Registration}/>
    <Route exact path="/DFormUse" component={DformUSE}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Formulaire" component={Formulaire}/>
                <Route exact path="/StaticForms" component={StaticForms}/>
                <Route exact path="/DynamicForms" component= {DynamicForms}/>
                <Route exact path="/updateForm" component={FormUpdate}/>
                <Route exact path="/RiskManagementForm" component={RiskManagementForm}/>
                <Route exact path="/GAPAnalysisForm" component={GAPAnalysisForm}/>
                <Route exact path="/FormInspector" component={FormInspector}/>
                <Route path="/planing" component={PlaningInsp}/>
                <Route path="/planingAction" component={PlaningAction}/>
                <Route path="/PageInspector" component={PageInspector}/>
                <Route path="/PageAdmin" component={PageAdmin}/>
                <Route path="/PageServiceProvider" component={PageServiceProvider}/>
                <Route path="/PlanInspector" component={inspectorPlan}/>
                <Route path="/DynamicFormType" component={DynamicFormsType}/>
                <Route path="/dashbordClient" component={DashboardClient}/>
                <Route path="/Results" component={InspResults}/>
                <Route path="/InspectorHitorique" component={InspectorHitorique}/>  
                <Route path="/RiskManagementEdit" component={RiskManagementEdit}/>
                <Route path="/GAPAnalysisEdit" component={GAPAnalysisEdit}/>
                <Route path="/RiskManagementConfirm" component={RiskManagementConfirm}/>
                <Route path="/GAPAnalysisEditConfirm" component={GAPConfirm}/>

  </Switch>
  </BrowserRouter>
  </Provider>
  </>
);
ReactDOM.render(<MyAppWithStore />,
  document.getElementById('root')
);

reportWebVitals();
