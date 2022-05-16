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
import Page from './Components/page';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home';
import { Dashboard } from './Components/dashboard/dashboard';
import Formulaire from './Components/DynamicForm/Formulaire';
import StaticForms from './Components/StaticForm/StaticForms';
import DynamicForms from './Components/DynamicForm/DynamicForms';
import FormUpdate from './Components/DynamicForm/FormUpdate';
import RiskManagementForm from './Components/StaticForm/RiskManagementForm';
import FormInspector from './Components/Inspector/FormInspector';
import PlaningInsp from './Components/Plan/PlaningInsp';
import PlaningAction from './Components/Plan/PlaningAction';

const MyAppWithStore = () => (
  <>
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={LoginPage}/>
    <Route exact path="/registration" component={Registration}/>
    <Route exact path="/Page" component={Page}/>

                <Route exact path="/Home" component={Home}/>
                <Route exact path="/dashbord" component={Dashboard}/> 
                <Route exact path="/Formulaire" component={Formulaire}/>
                <Route exact path="/StaticForms" component={StaticForms}/>
                <Route exact path="/DynamicForms" component= {DynamicForms}/>
                <Route exact path="/updateForm" component={FormUpdate}/>
                <Route exact path="/RiskManagementForm" component={RiskManagementForm}/>
                <Route exact path="/FormInspector" component={FormInspector}/>
                <Route path="/planing" component={PlaningInsp}/>
                <Route path="/planingAction" component={PlaningAction}/>
              
   
  </Switch>
  </BrowserRouter>
  </Provider>
  </>
);
ReactDOM.render(<MyAppWithStore />,
  document.getElementById('root')
);

reportWebVitals();
