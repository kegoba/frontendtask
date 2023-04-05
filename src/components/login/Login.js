import React, { Component } from "react";
//import { Link } from "react-router-dom";
import {Alert} from "reactstrap"
import {connect} from "react-redux"
import {URL} from "../asset/asset"
import axios from "axios";
import {Login_action} from "../reducer/Action"
import "./index.css";

//import { NotificationManger} from "react-notifications"
//import Auth from "../Auth/auth";

const MapStateToProps = (state)=>({
  user : state.user
})
const MapDispatchToProps =(dispatch) =>({
  Login_action : (user)=>{
     dispatch(Login_action(user));
  }
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onchangePassword = this.onchangePassword.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

    this.state = {
      user: [],
      email: "",
      password: "",
      logining: false,
      login : true,
      error : false,
      message : "",
    };
  }

  
  onchangeEmail(event) {
    this.setState({email: event.target.value,});
  }
  onchangePassword(event) {
    this.setState({ password: event.target.value,});
  }

  handlesubmit = () => {
    const { email, password} = this.state
    const postdata = {
         email: email,
         password: password,
       };
    const prev = this.props.location.state || "/"
    if (email.length < 5 && password.length < 3){
      this.setState({error : true, message : "Please Enter A Valid Data"},()=>{
          window.setTimeout(()=>{
          this.setState({
          error : false
          })
        }, 3000)
      })
    } else {
      this.setState({
        logining: true,
        login : false

      })
      console.log(this.state.logining)
    axios.post( URL + "/login/", postdata)
        .then((resp) => {
          console.log(resp.status)
          if (resp.status === 200){
            this.props.Login_action(resp.data);
            this.setState({
              logining: false,
              login : true,
              user : resp.data
            })
             
            
            this.props.history.push(prev,  "/")
        }
        else if ( resp.status === 300){
        this.setState({error: true, message: "Incorrect Password or Username"}, () => {
            window.setTimeout(() => {
            this.setState({error: false})
          }, 3000)
        })} 
      })
      .catch( (err)=> {
        this.setState({ error: true,
          login : true,
          logining : false,
          message: "Error While Trying To  Login"}, 
        () => {
          window.setTimeout(() => {
          this.setState({error: false
          })
        },3000)})
      });
    }
  };
  handleReg = ()=>{
    this.props.history.push("/reg")
  }
  handleLogin = () => {
    this.props.history.push("/login")
  }



  render() {
  const  {logining, login} = this.state
    return (
      <div className="">
        <div className="container reg-login">
          <div className="row">
            <div className="col">
              <button  className="btn btn-info">
                <span onClick={this.handleReg} className="reg-sm btn-info text-left" >
                  Register
                </span>
                <span onClick={this.handleLogin} className="login-sm btn-info text-right">
                  Login
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="login-form">
          <Alert isOpen={this.state.error} color="danger" >{ this.state.message} </Alert>
          <div className="container ">
            <div className="row">
              <div className="col">
                <input
                  placeholder="E-mail"
                  type="text"
                  className=""
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
                  placeholder="Password"
                  type="password"
                  autoComplete="on"
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
                  onClick={this.handlesubmit}
                >
                  {logining && <i className="fa fa-spinner" />}
                  {login && <i> Login </i>} 
                  
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="registered" >
                  Not registered?  <span onClick={this.handleReg}> Register  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect( MapStateToProps, MapDispatchToProps)(Login)
