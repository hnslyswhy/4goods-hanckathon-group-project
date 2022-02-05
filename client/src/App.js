import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import OrganizationPage from './pages/OrganizationPage/OrganizationPage';
import OrganizationDetailsPage from './pages/OrganizationDetailsPage/OrganizationDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/organizations' componet={OrganizationPage} />
          <Route path='/organization/:id'  component={OrganizationDetailsPage} />

        </Switch>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

{/* <BrowserRouter>
       <Route path='' exact component={Header}></Route>
        
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/products' exact component={ProductsPage}/>
          <Route  path='/products/:id' component={ProductDetails}/>
          <Route path='/cart/:productId?' component ={Cart}/>
          <Route path='/signin' component ={SignIn}/>
          <Route path='/signup' component ={SignUp}/>
          <Route path='/checkout' component ={ShippingPage}/>
          <Route path='/payment' component ={PaymentPage}/>
          <Route path='/placeorder' component ={PlaceOrder}/>
          <Route path='/order/:orderId' component ={DisplayOrderPage}/>
          <Route path='/profile' component ={ProfilePage}/>
          <Route path='/orderlist' component ={OrderHistory}/>
          <Route path='/search/:name' component ={SearchResultPage}/>
          <Route path='/confirmation/:orderId' component ={ConfirmationPage}/>
          <Route path='/findstore' component ={FindStorePage}/>         
        </Switch> 
      <Footer/>
      </BrowserRouter>  */}
