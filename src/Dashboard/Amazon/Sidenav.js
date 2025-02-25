import React, { Component } from "react";
import "./Sidenave.css";
import CartList from "./CartList";

class Sidenav extends Component {
    render() {
        return (
            <>
                <div className={`cart-sidebar ${this.props.isPanel ? "open" : ""}`}>
                    <button className="close-btn" onClick={this.props.setIsPanel}>✖</button>
                    <h3 style={{color:"black"}}>Your Cart: <i>Total Items</i> {this.props.counter}</h3>
                    <h4 style={{color:"black"}}>Your Cart Price:{this.props.totalValue}</h4>
                  
                    {this.props.selectedProducts.length > 0 ? (
                        <CartList
                            selectedProducts={this.props.selectedProducts}
                            removeItem={this.props.removeItem}
                            totalValue={this.props.totalValue}
                            counter={this.props.counter}
                        />
                    ) : (
                        <p>Cart is empty</p>
                    )}
                </div>

                {this.props.isPanel && <div className="overlay" onClick={this.props.setIsPanel}></div>}
            </>
        );
    }
}

export default Sidenav;
