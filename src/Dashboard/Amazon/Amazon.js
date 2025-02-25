import React, { Component } from "react";
import "./Amazon.css";
import Header from "./Header";
import Products from "./ProductPanel.js";
import Sidenav from "./Sidenav.js";

class Amazon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProducts: [],
            counter: 0,
            totalValue: 0,
            isPanel: false
        };
    }

    items = [
        { id: 1, image: "https://m.media-amazon.com/images/I/71GfJZTeu+L._AC_UF1000,1000_QL80_.jpg", buttonLabel: "Motherboard", price: 15000 },
        { id: 2, image: "https://nationalpc.in/image/cache/catalog/product/COOLER/Corsair/Liquid-Cooler/H100-RGB/1-1048x605.jpg.webp", buttonLabel: "CPU Cooler", price: 5000 },
        { id: 3, image: "https://guide-images.cdn.ifixit.com/igi/RVgwGtAIZQIJmCn1.full", buttonLabel: "Processor", price: 40000 },
        { id: 4, image: "https://cdn.mos.cms.futurecdn.net/NSYr6nsP63PRbdJFMNL5pT.jpg", buttonLabel: "RAM", price: 5000 },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEFQFL25CK_06w2c07ewNiLNvuHUC83maqJBT1NZ5cTK_Ft79d8B6LS0PBiYq0yHSVJM&usqp=CAU", buttonLabel: "SSD", price: 8500 },
        { id: 6, image: "https://www.bargainhardware.co.uk/wp/wp-content/uploads/2024/06/7ME636bQNGEGGrg5qEtWrK-1-scaled.jpg", buttonLabel: "Power Supply Unit", price: 9500 },
        { id: 7, image: "https://www.electronicwings.com/storage/PlatformSection/TopicContent/211/icon/ESP8266%20Wifi.jpg", buttonLabel: "WiFi Module", price: 500 },
        { id: 8, image: "https://www.electronicwings.com/storage/PlatformSection/TopicContent/118/icon/HC-05%20Bluetooth%20Module.jpg", buttonLabel: "Bluetooth Module", price: 500 },
        { id: 9, image: "https://m.media-amazon.com/images/I/31+QKUKdluL._SR290,290_.jpg", buttonLabel: "I/O boards", price: 500 }
    ];

    addItem = (item) => {
        this.setState(prevState => ({
            selectedProducts: [item, ...prevState.selectedProducts],
            counter: prevState.counter + 1,
            totalValue: prevState.totalValue + item.price
        }));
    };

    removeItem = (id) => {
        this.setState(prevState => {
            const removedItem = prevState.selectedProducts[id];
            const updatedProducts = prevState.selectedProducts.filter((_, i) => i !== id);
            return {
                selectedProducts: updatedProducts,
                counter: prevState.counter - 1,
                totalValue: prevState.totalValue - removedItem.price
            };
        });
    };

    toggleCart = () => {
        this.setState(prevState => ({ isPanel: !prevState.isPanel }));
    };

    render() {
        return (
            <div className="amazon-container">
                <Header counter={this.state.counter} openCart={this.toggleCart} />
                <Products items={this.items} addItem={this.addItem} />
                <Sidenav closeNav={this.closeNav} selectedProducts={this.state.selectedProducts} counter={this.state.counter} totalValue={this.state.totalValue} removeItem={this.removeItem} isPanel={this.state.isPanel} setIsPanel={this.toggleCart} />
            </div>
        );
    }
}

export default Amazon;
