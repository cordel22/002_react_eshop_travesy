import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
//  import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart.jsx";

export default class App extends Component {
  render() {
    return <React.Fragment>
          <NavBar />
          <ShoppingCart x="10"/>
          </React.Fragment>;
  }
}