import React, { Component } from "react";

export default class MainContent
extends Component {
constructor(props) {
  super(props);
  this.state = { 
    pageTitle: "Customers", 
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-456", address: {city: "Edinburgh"}},
      { id: 2, name: "Jim", phone: "789-101", address: {city: "IndianaPolis"}},
      { id: 3, name: "Spock", phone: "121-314", address: {city: "VulcansVille"}},
      { id: 4, name: "J-L", phone: null, address: {city: "Toulouse"}},
      { id: 5, name: "Deanna", phone: null, address: {city: "Miami"}}
    ] };
}
  render() {
    return (
      <div><h4 className="border-bottom m-1 p-1">
        {this.state.pageTitle}
        <br />
        <span className="badge badge-secondary m-2">
          { this.state.customersCount}
        </span>

        <button className="btn btn-info" onClick={this.onRefreshClick}>
          Refresh
        </button>
        </h4>
        
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.customers.map((cust) => {
                return (
                  <tr key={cust.id}>
              <td>{cust.id}</td>
              <td>{cust.name}</td>
              <td>{cust.phone ? (
                cust.phone):(
              <div className="bg-warning p-2 text-center">"No Phone"</div>
              )  }
                </td>
              <td>{cust.address.city}</td>
            </tr>
                )
              })
            }
            
          </tbody>
          </table>


        </div>
    );
  }

  //  Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    console.log("Refresh clicked")
    this.setState({
      customersCount: 7
    });
  }
}


