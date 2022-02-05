import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Organizations from "./pages/Organizations/Organizations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/organization" exact component={Organizations} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
