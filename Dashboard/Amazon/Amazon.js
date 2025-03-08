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
// cpu parts
    items = [
        { id: 1, image: "https://m.media-amazon.com/images/I/71GfJZTeu+L._AC_UF1000,1000_QL80_.jpg", buttonLabel: "Motherboard", price: 12000 },
        { id: 2, image: "https://nationalpc.in/image/cache/catalog/product/COOLER/Corsair/Liquid-Cooler/H100-RGB/1-1048x605.jpg.webp", buttonLabel: "CPU Cooler", price: 5000 },
        { id: 3, image: "https://guide-images.cdn.ifixit.com/igi/RVgwGtAIZQIJmCn1.full", buttonLabel: "12-core CPU Processor", price: 40000 },
        { id: 4, image: "https://cdn.mos.cms.futurecdn.net/NSYr6nsP63PRbdJFMNL5pT.jpg", buttonLabel: "10600 8GB RAM", price: 5000 },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEFQFL25CK_06w2c07ewNiLNvuHUC83maqJBT1NZ5cTK_Ft79d8B6LS0PBiYq0yHSVJM&usqp=CAU", buttonLabel: "SSD", price: 8500 },
        { id: 6, image: "https://www.bargainhardware.co.uk/wp/wp-content/uploads/2024/06/7ME636bQNGEGGrg5qEtWrK-1-scaled.jpg", buttonLabel: "Power Supply Unit", price: 9500 },
        { id: 7, image: "https://www.electronicwings.com/storage/PlatformSection/TopicContent/211/icon/ESP8266%20Wifi.jpg", buttonLabel: "WiFi Module", price: 500 },
        { id: 8, image: "https://www.electronicwings.com/storage/PlatformSection/TopicContent/118/icon/HC-05%20Bluetooth%20Module.jpg", buttonLabel: "Bluetooth Module", price: 500 },
        { id: 9, image: "https://m.media-amazon.com/images/I/31+QKUKdluL._SR290,290_.jpg", buttonLabel: "I/O boards", price: 2100 },
        { id: 10, image: "https://images-cdn.ubuy.co.in/659e5859d9df7d56e632320c-owc-aura-pro-x2-ssd-kit-owc-aura-pro-x2.jpg", buttonLabel: "owc aura pro x2", price: 6099 },
        { id: 11, image: "https://cdn.shopify.com/s/files/1/0045/4092/4007/products/GkZtkaNKQrqx6RKt_6f82d153-80d8-4252-97af-7ff90c069945.jpg?v=1667239038&width=800", buttonLabel: " Lower SATA Cable", price: 1800 },
        { id: 12, image: "https://cdn.shopify.com/s/files/1/0045/4092/4007/products/VBy1nahVW31PUYoq_022d7f8d-cae8-45b5-b418-ecdf734e5150.jpg?v=1667238958&width=800", buttonLabel: " Upper SATA Cable", price: 1800 },
        { id: 13, image: "https://cdn.shopify.com/s/files/1/0045/4092/4007/products/XB4QHyhagXdmtLCL_b930026a-f548-493b-97c0-c01eb5e6fc25.jpg?v=1667239047&width=800", buttonLabel: " 2.7 GHz Logic Board", price: 18000 },
        { id: 14, image: "https://cdn.shopify.com/s/files/1/0045/4092/4007/products/VDwyuiYUcQmYZxXk_a1801713-85b9-4c11-99b1-bbaab97d6513.jpg?v=1667238985&width=800", buttonLabel: " Bottom Cover", price: 1800 },
        { id: 15, image: "https://cdn.shopify.com/s/files/1/0045/4092/4007/products/eGpTVrFuqwSyjLJL_dea47e9c-f9c3-4fc2-ab14-417cf67f5d95.jpg?v=1667238961&width=800", buttonLabel: " Drive Tray", price: 1300 },
    ];
// add to cart function
    addItem = (item) => {
        this.setState(prevState => ({
            selectedProducts: [item, ...prevState.selectedProducts],
            counter: prevState.counter + 1,
            totalValue: prevState.totalValue + item.price
        }));
    };

    // remove function
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
