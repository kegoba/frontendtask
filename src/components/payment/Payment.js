import React, { Component } from "react"
import { Balance} from "../reducer/Action"
import { BALANCE } from "../reducer/cart-actions"
import {connect, useSelector} from "react-redux"
import {URL, KEY} from "../asset/asset"
import axios from "axios"
 import {usePaystackPayment} from "react-paystack";
import { Alert } from "reactstrap";


const MapstateToProps =(state) =>{
    console.log("mapstatetoprops",state.paymentDetail)
    return {
      paymentDetail : state.paymentDetail
    }

}

const MapDispatchToProps =(dispatch) =>{
    return{
        Balance : (email)=>{dispatch(BALANCE)}
    }


}

const PaymentButton = () => {
 const paymentDetail = useSelector((state) => state.paymentDetail);
  const initializePayment = usePaystackPayment(paymentDetail);
  return (
    <div>
      <button 
      className="btn btn-info"
        onClick={() => {
          initializePayment();
        }}
      >
        Proceed{">>"}
      </button>
    </div>
  );
};

function Payment() {
     const paymentDetail = useSelector((state) => state.paymentDetail);


  return (
    <div className="payment">
      <div className="container">
        <div className="row bg-info">
          <div className="col ">  {paymentDetail.email} </div>
          <div className="col"> {paymentDetail.reference}</div>
          <div className="col"> {paymentDetail.view_amount}</div>
        </div>
      </div>
      <PaymentButton  className="Pay"/>
    </div>
  );
}

export default  connect(MapstateToProps, MapDispatchToProps) (Payment)