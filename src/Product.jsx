import React, { Component } from "react";

export default class Product extends Component {

  /* state = { x: 100 }; */
  state = { 
            product: this.props.product/* .id,
            productName: this.props.product.productName,
            price: this.props.product.price, */ };

  render() {
    console.log(this.props);

    return (
      <div class="col-lg-6">
        <div className="card m-2">
      <div className="card-body">
      {/* <div className="text-muted"># {this.props.id}</div> */}
      {/* <div className="text-muted"># {this.state.id}</div> */}
      <div className="text-muted"># {this.state.product.id}</div>

      {/* <h5 className="pt-5 border-top">{this.props.productName}</h5> */}
      {/* <h5 className="pt-2 border-top">{this.state.productName}</h5> */}
      <h5 className="pt-2 border-top">{this.state.product.productName}</h5>

      {/* <div>${this.props.price}</div> */}
      {/* <div>${this.state.price}</div> */}
      <div>${this.state.product.price}</div>
      </div>
      
      </div>  
      </div>
      
    );
  }
}