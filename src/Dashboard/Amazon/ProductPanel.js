import React from "react";
import "./ProductPanel.css";

export default class Products extends React.Component {
    render(){
        return (
            <main className="product-container">
                {items.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.image} alt={item.buttonLabel} className="product-image" />
                        <h5>{item.buttonLabel}</h5>
                        <h5>₹{item.price}</h5>
                        <button className="buy-button" onClick={() => addItem(item)}>Add to Cart</button>
                    </div>
                ))}
            </main>
        )
    }
}