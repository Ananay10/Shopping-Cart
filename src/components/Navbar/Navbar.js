import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="logo">
          <i class="fas fa-mobile-alt fa-4x"></i>
        </div>
        <ul className="navbar">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">About</li>
          <li className="nav-items">Shop</li>

          <Link to="/checkout">
            <button className="nav-btn">
              <i className="fas fa-cart-plus" />
              My Cart
            </button>
          </Link>
        </ul>
      </nav>
    );
  }
}
