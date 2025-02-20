import React from "react";
import "./Amazon.css";
import Header from "./Header";


 export default class Amazon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cartArray: [],
            showCart: false,
            counter:0
        }

        
    }
    
    render(){
        return(
            <>
           <Header/>
           
            </>
        )
    }
 }