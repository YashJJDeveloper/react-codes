import React, { Component } from "react";
import "./CartList.css";

class CartList extends Component {
    render() {
        const { selectedProducts, removeItem } = this.props;

        return (
            <div className="cart-list">
                {selectedProducts.length > 0 ? (
                    selectedProducts.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img className="cart-image" src={item.image} alt={item.buttonLabel} />
                            <p className="cart-item-name">{item.buttonLabel}</p>
                            <p className="cart-item-price">₹{item.price}</p>
                            <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p className="empty-cart">Your cart is empty.</p>
                )}
            </div>
        );
    }
}

export default CartList;
