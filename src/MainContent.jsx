import React, { Component } from "react";

export default class MainContent
extends Component {
constructor(props) {
  super(props);
  this.state = { 
    pageTitle: "Customers", 
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-456", address: {city: "Edinburgh"}, 
        photo: "https://picsum.photos/id/1010/60"},
      { id: 2, name: "Jim", phone: "789-101", address: {city: "IndianaPolis"},
        photo: "https://picsum.photos/id/1011/60"},
      { id: 3, name: "Spock", phone: "121-314", address: {city: "VulcansVille"},
        photo: "https://picsum.photos/id/1012/60"},
      { id: 4, name: "J-L", phone: null, address: {city: "Toulouse"},
        photo: "https://picsum.photos/id/1014/60"},
      { id: 5, name: "Deanna", phone: null, address: {city: "Miami"},
        photo: "https://picsum.photos/id/1015/60"}
    ] };
}

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return { backgroundColor: "green"};
    else if (custName.startsWith("J")) return { backgroundColor: "red"};
    else return {};
  };
  render() {
    return (
      <div><h4 className=" m-1 p-1">
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
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.getCustomerRow()}
            
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

  getPhoneToRender = (phone) => {
    {
      /* return cust.phone ? (
      cust.phone
      ):(
    <div className="bg-warning p-2 text-center">"No Phone"</div>
    ) */
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center">"No Phone"</div>;
    }
  }
  }

  getCustomerRow = () => {
    return (this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td><img src={cust.photo} alt="Customer"/></td>
          <td style={this.customerNameStyle(cust.name)}>
            {cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    }))
  }
}


