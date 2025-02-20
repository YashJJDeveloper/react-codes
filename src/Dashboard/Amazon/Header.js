import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import CartLogo from "./CartLogo";
import AmazonLogo from "../Amazon/Amazon-Images/Amazon-Logo.png"
export default class Header extends React.Component{
    render(){
        return(
            <>
            <header className="amazon-header">
                <img  className= "logo-image"src={AmazonLogo}/>
                <SearchBar/>
                <CartLogo/>
            </header>
            </>
        )
    }
}