import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone",price:8900,quantity: 0},
      { id: 2, productName: "Sony Camera",price:4500,quantity: 0},
      { id: 3, productName: "Samsung QLED TV",price:7745,quantity: 0},
      { id: 4, productName: "iPad Pro",price:12400,quantity: 0},
      { id: 5, productName: "Xbox",price:7780,quantity: 0},
      { id: 6, productName: "Dell Monitor",price:880,quantity: 0}
    ]
  }
  render() {
    return (
    <div className="container-fluid">
      <h4>Shopping Cart</h4>

      <div className="row">
        {this.state.products.map((prod) => {
          return (
            <Product 
              key={prod.id} 
              product={prod} 
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              >
              <button className="btn btn-primary">Buy Now</button>
            </Product>
          );
        })}
      </div>
      </div>
    );
  }
  //  render ends here

  handleIncrement = (product, maxValue) => {
    //  executes when the user clicks the button +
    //  console.log("handleIncrement",product);
    /* product.quantity = product.quantity + 1; */
    //  get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
       allProducts[index].quantity++;
      //  updte the stte of current component (parent component)
      this.setState({ products: allProducts });
    }
    //  console.log(allProducts[index]);
  };

  handleDecrement = (product, minValue) => {
    /* console.log("handleDecrement",product);
    product.quantity = product.quantity - 1; */
    //  executes when the user clicks the button +
    
    //  get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //  updte the stte of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}



