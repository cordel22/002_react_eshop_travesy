import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
//  import MainContent from "./MainContent";
 import ShoppingCart from "./ShoppingCart.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashbord.jsx";
import CustomersList from "./CustomersList";
//import { Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import { Routes } from "react-router";

import ReactDOM from "react-dom";



export default class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/customers" element={<CustomersList />}/>
              <Route path="/cart" element={<ShoppingCart />}/>
            </Routes>
          
          </BrowserRouter>
         
    );
  }
}

{/* <React.Fragment> */}
          {/* <Login></Login> */}
          {/* <ShoppingCart></ShoppingCart> */} 
          {/* </React.Fragment> */}
          {/* <Dashboard></Dashboard> */}