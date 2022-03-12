import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
//  import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart.jsx";
//  import Login from "./Login.jsx";


export default class App extends Component {
  render() {
    return (
          <React.Fragment>
          <NavBar />
          {/* <Login></Login> */}
          <ShoppingCart></ShoppingCart>
          </React.Fragment>
    );
  }
}