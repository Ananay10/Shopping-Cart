import React, { Component } from "react";
import "./Payment.css";
import Paypal from "../../../public/img/paypal.png";
import { Link } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class PaymentMethod extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="cardDetails">
            <input type="radio" name="creditcard" />
            <label for="card">
              <span>Credit/Debit Card</span>
            </label>
            <br />
            <input
              class="inputCard"
              type="number"
              min="1000"
              max="9999"
              name="creditCard1"
              id="creditCard1"
              required
            />
            -
            <input
              class="inputCard"
              type="number"
              min="1000"
              max="9999"
              name="creditCard2"
              id="creditCard2"
              required
            />
            -
            <input
              class="inputCard"
              type="number"
              min="1000"
              max="9999"
              name="creditCard3"
              id="creditCard3"
              required
            />
            -
            <input
              class="inputCard"
              type="number"
              min="1000"
              max="9999"
              name="creditCard4"
              id="creditCard4"
              required
            />
            <input
              class="inputCard"
              name="expiry"
              id="expiry"
              type="month"
              placeholder="Expiry"
              style={{ marginLeft: "30px" }}
              required
            />
            <br />
            <input
              type="number"
              name="cvv"
              id="cvv"
              required
              placeholder="CVV"
              style={{ width: "80px", marginRight: "20px" }}
            />
            <input type="text" placeholder="Card Holder Name"></input>
          </div>
          <div className="paypal">
            <div>
              <input type="radio" name="paypal" />
              <label>Paypal</label>
              <p>
                PayPal is the faster, safer way to send money, make an online
                payment, receive money or set up a merchant account
              </p>
            </div>
            <img src={Paypal} alt="paypal"></img>
          </div>

          <Link to="/order">
            <button className="btn btn-night">Pay Now</button>
          </Link>
          <Link to="/">
            <button className="btn btn-white">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}
