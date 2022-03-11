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
      <div className="text-muted"># {this.state.product.id}</div>

      <h5 className="pt-2 border-top">{this.state.product.productName}</h5>

      
      <div>${this.state.product.price}</div>
      </div>
      {/* card body ends here */}

      <div className="card-footer text-right">
        {this.props.children}
      </div>
      
      </div>  
      </div>
      
    );
  }
}