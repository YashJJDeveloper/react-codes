import React, { Component } from "react";
import "./ProductPanel.css";

class Products extends Component {
    render() {
        const { items, addItem } = this.props;

        return (
            <div className="product-container">
                {items.map((item) => (
                    <div key={item.id} className="product-card">
                        <img className="product-image" src={item.image} alt={item.buttonLabel} />
                        <h3 className="product-name">{item.buttonLabel}</h3>
                        <p className="product-price">₹{item.price}</p>
                        <button className="buy-button" onClick={() => addItem(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Products;
