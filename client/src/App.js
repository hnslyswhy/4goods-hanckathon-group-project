import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import OrganizationPage from './pages/OrganizationPage/OrganizationPage';
import OrganizationDetailsPage from './pages/OrganizationDetailsPage/OrganizationDetailsPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/organizations' componet={OrganizationPage} />
          <Route path='/organization/:id'  component={OrganizationDetailsPage} />
          <Route path= '/signup' component={SignupPage} />
          <Route path='/login' component ={LoginPage} />

        </Switch>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;


