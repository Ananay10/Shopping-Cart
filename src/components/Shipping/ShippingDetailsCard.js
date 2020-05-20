import React, { Component } from "react";

import ShippingDetails from "./ShippingDetails";

export default class ShippingDetailCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="ShippingDetailCard-wrapper">
          <ShippingDetails />
        </div>
      </div>
    );
  }
}
