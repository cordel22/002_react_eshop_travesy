import React, { Component } from "react";

export default class Login extends /* React. */Component {

  constructor(props) {
    super(props);
    this.state = { email: "",password:"",message: "" };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">
          Login
        </h4>

      {/* Email starts  */} 
      <div className="form-group form-row">
      <label className="col-lg-4">Email:</label>
      <input 
        type="text" 
        className="form-control" 
        value={this.state.email}/* err function(event:React.ChangeEvent<HTMLInputElement>):void  */
        onChange={(event) => { this.setState({ email:event.target.value });
          /* console.log(this.state.email); */
        } }
        />
      </div>
      {/* Email ends  */} 

      {/* Password starts  */} 
      <div className="form-group form-row">
      <label className="col-lg-4">Password:</label>
      <input 
        type="password" 
        className="form-control" 
        value={this.state.password}
        onChange={(event) => { this.setState({ password:event.target.value });
          /* console.log(this.state.email); */
        } }
        />
      </div>
      {/* Password ends  */}

      <div className="text-right">
        {this.state.message}
        <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
          Login
        </button>

        
      </div>
      </div>
    );
  } //  end of render

  //  Executes when the user clicks on Login
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(`http://localhost:8000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"} );
    
    var body = await response.json();

    if (body.length>0) {
      //  success
      this.setState({
        message: <span className="text-success">Succesfully Logged-in</span>
      });
    } else {
      //  error
      this.setState({
        message: (
        <span className="text-danger">Invalid login, please try again</span>
      ),
    });
  }
  };

}