import React ,{Component} from "react"
import { Link, useLocation} from "react-router-dom";
//import {usePaystackPayment} from "react-paystack";
import {connect} from "react-redux"
import { Make_payment } from "../reducer/Action" // ../reducer/Action";
import {Alert} from "reactstrap"
import {KEY} from "../asset/asset"


const MapStateToProps = (state)=>({
    email : state.email
})

const MapDispatchToProps = (dispatch)=>({
   Make_payment : (amount)=>{
        dispatch(Make_payment(amount))

    }
})
class PayInput extends Component{
    constructor(){
        super()
        this.state ={
            amount : "",
            msg : "" ,
            error : false,

        }
    }
    onchangeAmount = (e)=>{
        this.setState({
            amount : e.target.value
        })

        console.log(this.state.amount)
    }
    handlePay=(amount)=>{
        const paymentDetail = {
          reference: new Date().getTime(),
          email: this.props.email,
          amount: this.state.amount * 100,
          publicKey: KEY,
        };
        let email = this.props.email
        if (!email){
            //const location = useLocation
            const from =this.props.location.pathname
            this.props.history.push("/login", from)

        }else{
            if (amount < 100) {
                this.setState({ error: true }, () => {
                    window.setTimeout(() => {
                        this.setState({
                            error: false
                        })
                    },4000)

                })
            } else {

                this.props.Make_payment(paymentDetail);
                this.props.history.push("/payment")

            }


        }
        
        

    }
  
    render(){
        return(
        <div className="reg-login">
            <form>
                    <Alert color="info"  isOpen={this.state.error} > Invalid Amount</Alert>
                    <div className="container  ">
                        <div className="row">
                            <div className="col">
                                <input
                                    placeholder="Amount"
                                    type="text"
                                    className=""
                                    onChange={this.onchangeAmount}
                                    value={this.state.amount}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                 <p className="btn pay-1 btn-info"  onClick={()=>this.handlePay(this.state.amount)}>  {"Proceed >>>"}   </p>
                            
                            </div>
                        </div>
                    </div>   
            </form>
        </div>
        )}

}


export default connect(MapStateToProps, MapDispatchToProps) (PayInput);