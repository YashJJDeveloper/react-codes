import React, { Component } from "react";
import "./Header.css";

class CartLogo extends Component {
    render() {
        return (
            <button className="amazon-cart" onClick={this.props.openCart}>
                🛒
                {this.props.counter > 0 && (
                    <span className="cart-count">{this.props.counter}</span>
                )}
            </button>
        );
    }
}

export default CartLogo;
