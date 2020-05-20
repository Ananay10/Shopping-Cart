import React, { Component } from "react";
import "./ShippingDetails.css";
import { Link } from "react-router-dom";

export default class ShippingDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper-shipping">
          <h2>Shipping Details </h2>
          <form action="#">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
            <br />
            <input
              type="text"
              name="address"
              id="address"
              placeholder=" Address Line 1"
              required
            />
            <br />
            <input
              type="text"
              name="address2"
              id="address2"
              placeholder=" Address Line 2"
              required
            />
            <br />
            <select id="opt-sel">
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="Mexico">USA</option>
              <option value="Australia">Australia</option>
              <option value="Thailand">Thailand</option>
            </select>
            <input type="text" id="city" name="city" placeholder="City"></input>
            <br />
            <input
              type="number"
              id="zip"
              name="zip"
              placeholder="Zip/Postal Code"
            ></input>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
            ></input>

            <div className="shipping-buttons">
              <div className="free-shipping">
                <input type="radio" />
                {/* <label htmlFor="free-shipping"> */}
                <span>Free Shipping[2-4 days]</span>

                {/* </label> */}
              </div>
              <div className="next-day">
                <input type="radio" />
                {/* <label htmlFor="next-day"> */}
                <span>Next Day Delivery - ₹20</span>

                {/* </label> */}
              </div>
            </div>
            <Link to="/pay">
              {" "}
              <button className="btn btn-night">Next</button>
            </Link>
            <Link to="/">
              <button className=" btn btn-white">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
