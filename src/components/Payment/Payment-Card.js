import React, { Component } from "react";
import PaymentMethod from "./Payment";
export default class PaymentDetailCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="payment-wrapper">
          <PaymentMethod />
        </div>
      </div>
    );
  }
}
