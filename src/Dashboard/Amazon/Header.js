import React, { Component } from "react";
import "./Header.css";
import CartLogo from "./CartLogo";
class Header extends Component {
    render() {
        return (
            <header className="amazon-header">
                <img src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png" alt="Amazon Logo" className="logo-image" />
                <div className="amazon-search-bar">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button">Search</button>
                </div>
                <CartLogo onClick={this.props.openCart} counter={this.props.counter} openCart={this.props.openCart}/>
            </header>
        );
    }
}

export default Header;
