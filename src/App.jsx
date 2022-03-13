import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
//  import MainContent from "./MainContent";
 import ShoppingCart from "./ShoppingCart.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashbord.jsx";
import CustomersList from "./CustomersList";
//import { Route } from "react-router";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { /* Routes, */  } from "react-router";


import ReactDOM from "react-dom";
import NoMatchPage from "./NoMatchPage.jsx";




export default class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <NavBar />
            <div className="container-fluid">
            <Routes>
              
              <Route path="/" exact element={<Login />}/>
              <Route path="/dashboard" exact element={<Dashboard />}/>
              <Route path="/customers" exact element={<CustomersList />}/>
              <Route path="/cart" exact element={<ShoppingCart />}/>
              <Route path="/*" element={<NoMatchPage />}/>
            </Routes>
          </div>
          </BrowserRouter>
         
    );
  }
}

{/* <Switch>
</Switch> */}
{/* <React.Fragment> */}
          {/* <Login></Login> */}
          {/* <ShoppingCart></ShoppingCart> */} 
          {/* </React.Fragment> */}
          {/* <Dashboard></Dashboard> */}