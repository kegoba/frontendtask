import React, { Component } from "react";
import Axios from "axios";
import {URL} from "../asset/asset"
import {Alert} from "reactstrap"

class Reg extends Component {
  constructor() {
    super()
    this.state = {
      user : [],
      name: "",
      email: "",
      password: "",
      phone : "",
      error : false,
    };
  }
  onchangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }
  onchangeEmail =(e) => {
    this.setState({
      email: e.target.value,
    });
  }
  onchangePassword =(e) => {
    this.setState({
      password: e.target.value,
    });
  }
   onchangePhone =(e) => {
    this.setState({
      phone: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, phone} = this.state
    if ((name.length >4) && (email.length> 4) && (password.length>4) && (phone.length>4)){
      const postdata = { name: name, email: email, password: password, phone: phone };
      Axios.post(URL + "/register/", postdata)
        .then((resp) => {
          if (resp.status === 200) {
            this.props.Login_action(resp.data);
            this.setState({ user: resp.data })


            this.props.history.push("/login")
          }
        })
        .catch((err) => {
        })
    } else{
      this.setState({ error: true }, () => {
        window.setTimeout(()=>{
          this.setState({
            error : false
          })
        },4000)
       })
    }   
  };
  handleReg = () => {
    this.props.history.push("/reg")
  }
  handleLogin = () => {
    this.props.history.push("/login")
  }
  render() {
    return (
      <div>
        <div className="container reg-login">
          <div className="row">
            <div className="col">
              <button  className="btn btn-info">
                <span onClick={this.handleReg} className="reg-sm btn-info text-left">
                  Register
                </span>
                <span onClick={this.handleLogin} className="login-sm btn-info text-right">
                  Login
                </span>
              </button>
            </div>
          </div>
        </div>
        <Alert isOpen={this.state.error} color="danger"> Please Enter a Valid Data </Alert>
        <div className=" container login-form text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="Full Name"
                  type="text"
                  onChange={this.onchangeName}
                  value={this.state.name}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="E-mail"
                  type="text"
                  onChange={this.onchangeEmail}
                  value={this.state.email}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="Phone"
                  type="text"
                  onChange={this.onchangePhone}
                  value={this.state.phone}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="Password"
                  type="password"
                  onChange={this.onchangePassword}
                  value={this.state.password}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handleSubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reg;
