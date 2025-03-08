import React from "react";
// import { useState } from "react";
import "./Bulb.css";

export default  class  Bulb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: "blue"
        };
    }
    // bulb images
     image = {
        blue: "https://www.electricalworld.com/Images/Models/Full/6902.Jpg",
        red: "https://www.electricalworld.com/Images/Models/Full/6908.Jpg",
        yellow: "https://www.electricalworld.com/Images/Models/Full/6911.Jpg",
        green:"https://www.electricalworld.com/Images/Models/Full/6904.Jpg"
    }
    
     onSelect = (image) =>{
       console.log("clicked")
        this.setState({
            image,
        })
        
       
    }
    render(){
    return(
        <div className="bulb-container">
            <h1>Select a Bulb</h1> 

           
            <img style={{width:"20vw", height:"20vw", margin:"2vw"}} src={this.image[this.state.image]}></img>
            <div className="buttons">
            <button className="change-color" onClick={()=>this.onSelect("blue")} >Blue</button>
            <button className="change-color" onClick={()=>this.onSelect("yellow")} >Yellow</button>
            <button className="change-color" onClick={()=>this.onSelect("red")} >Red</button>
            <button className="change-color" onClick={()=>this.onSelect("green")} >Green</button> 
            </div>
        </div>
    )
}
}