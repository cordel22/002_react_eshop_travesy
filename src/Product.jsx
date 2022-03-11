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
        <div class="float-left">
          <span className="badge">{this.state.product.quantity}</span>

          <div className="btn-group">
            <button className="btn btn-outline-success"
                    onClick={() => {this.props.onIncrement(this.state.product, 10);}}
                    >
                      +
                      </button>  
            <button className="btn btn-outline-success"
                    onClick={() => {this.props.onDecrement(this.state.product, 0);}}
                    >
                      -
                      </button>  
          </div> 
        </div>
        {/* float-left ends here */}
        <div class="float-right">{this.props.children}</div>
        {/* {this.props.children} */}
      </div>
        {/* card-footer ends here  */}
      </div>  
      </div>
      
    );
  }
}