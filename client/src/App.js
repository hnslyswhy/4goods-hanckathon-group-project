import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

import OrganizationsPage from "./pages/OrganizationsPage/OrganizationsPage";
import OrganizationDetailsPage from "./pages/OrganizationDetailsPage/OrganizationDetailsPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DonationPage from "./pages/DonationPage/DonationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/organizations" exact component={OrganizationsPage} />
          <Route
            path="/organizations/:id"
            component={OrganizationDetailsPage}
          />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
         

          <Route path="/profile" component={DonationPage} />

          <Route path="/logout" component={LogoutPage} />
         

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
