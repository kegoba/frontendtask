import React, { Component } from "react"
import {connect} from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AddToCart} from "../reducer/Action"
import axios from "axios"
import {GetProduct} from "../reducer/ProductReducer"
import {URL} from "../asset/asset"
import { Gallary} from "../gallary/Gallary"
import {NotificationManager} from "react-notifications"

const MapStateToProps =(state)=>{
    return {
        items : state.item ,
        cart : state.cart,
        user : state.user
    }
    
}

const MapDispatchToProps= (dispatch)=>({
    
    AddToCart: (product_id)=>{
        dispatch(AddToCart(product_id))
        
    }

})

class Home extends Component {
  constructor() {
    super();
    this.handleToCart = this.handleToCart.bind(this);
    this.state = {
      items: [],
      men: [],
      women: [],
      message: "",
      show: false,
    };
  }

  componentDidMount() {
    GetProduct();
    let user = this.props.user
    console.log(user["email"], "user from home")
    axios.get(URL + "/getproduct/").then((resp) => {
      let data = resp.data;
      let women = data.filter((item) => item.product_category === "WOMEN");
      let men = data.filter((item) => item.product_category === "MEN");
      let women_wear = women.slice(1, 7);
      let men_wear = men.slice(1, 7);
      this.setState({
        items: data,
        men: men_wear,
        women: women_wear,
      });
    });
  }

  Notification = () => {
    NotificationManager.info("Item Added Successfully", "", 1000);
  };

  handleToCart = (product_id, name, price) => {
    console.log(product_id);
    this.props.AddToCart(product_id);
    
  };

  handleWomenRoute = () => {
    this.props.history.push("/women");
  };

  handleMenRoute = () => {
    this.props.history.push("/men");
  };
  render() {
    let women = this.state.women;
    let men = this.state.men;
    const men_category = () =>
      men.map((item , key)=> (
        <div
          key={key}
          className="product-col "
          onClick={() => this.handleToCart(item.product_id)}
        >
          <span className=" ">
            <img
              className="image "
              src={URL + item.image}
              alt={item.image}
            />
            <span
              onClick={
                (() => this.handleToCart(item.product_id),
                  this.Notification)
              }
              className=" addTocart  btn-info"
            >
              +
                    </span>
            &#8358;{Number(item.product_price).toLocaleString()}
          </span>
        </div>
      ));

    return (
      <div>
        <div>
          <div className="container gallary">
            <Gallary />
          </div>
          <p className="women text-center btn-info">
            <span onClick={this.handleMenRoute}> Feature Products.... </span>
          </p>
          <div className="container mobile_view">
            <Slider
            className="featured_product"
              dots={false}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              {men_category()}
            </Slider>
          </div>
          <div className="container desktop_view">
            <Slider
              className="featured_product"
              dots={false}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              {men_category()}
            </Slider>
          </div>
          <p className="women text-right btn-info">
            <span onClick={this.handleMenRoute}> Get All Men's Wear.... </span>
          </p>
          <div className="container animated swing">
            {men.length ? 
            <div className="product-row">
              {men.map((item, key) => (
                <div
                  key={key}
                  className="product-col "
                  onClick={() => this.handleToCart(item.product_id)}
                >
                  <span className=" card card-body">
                    <img
                      className="image "
                      src={URL + item.image}
                      alt={item.image}
                    />
                    <span
                      onClick={
                        (() => this.handleToCart(item.product_id),
                        this.Notification)
                      }
                      className=" addTocart  btn-info"
                    >
                      +
                    </span>
                    &#8358;{Number(item.product_price).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            :
            <h4> Loading product ... </h4>
            }
          </div>
        </div>
        <div>
          <p className="women btn-info text-right">
            <span onClick={this.handleWomenRoute}>
              Get All Women's Wear......
            </span>
          </p>
          <div className="container   animated swing">
            {!women.length ?
              <h4> Loading Product ..... </h4>
              :
            <div className="product-row">

              {women.map((item, key) => (
                <div
                  key={key}
                  className="product-col "
                  onClick={() => this.handleToCart(item.product_id)}
                >
                  <span className="card card-body">
                    <img
                      className="image "
                      src={URL + item.image}
                      alt={item.image}
                    />
                    <span
                      onClick={
                        (() => this.handleToCart(item.product_id),
                        this.Notification)
                      }
                      className=" addTocart  btn-info"
                    >
                      +
                    </span>
                    &#8358;{Number(item.product_price).toLocaleString()}
                  </span>
                </div>
              ))}

            </div>
            }
          </div>
            
        </div>
      </div>
    );
  }
}

export default  connect(MapStateToProps,MapDispatchToProps)(Home);
