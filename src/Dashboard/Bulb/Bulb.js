import React from "react";
// import { useState } from "react";
import "./Bulb.css";

export default  class  Bulb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: "white"
        };
    }
    
     image = {
        white: "https://m.media-amazon.com/images/I/31jOiu7n38L.jpg",
        red: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_sHYfmOFaygAR_YGVvlGU9xiIkh4VqQlbA&s",
        yellow: "https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb-250x250.jpg"
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
            <div>
            <button onClick={()=>this.onSelect("white")} >White</button>
            <button onClick={()=>this.onSelect("yellow")} >Yellow</button>
            <button onClick={()=>this.onSelect("red")} >Red</button> 
            </div>
        </div>
    )
}
}