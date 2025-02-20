import React from "react";
import "./Header.css";

export default class CartLogo extends React.Component{
    render(){
        return(
            <>
             <button className="amazon-cart" onClick={this.props.openCart}>{this.props.counter}<img src="https://www.freeiconspng.com/uploads/cart-icon-16.png" style={{ height: "3vw", width: "3vw", background: "none" }} /></button>
            </>
        )
    }
}