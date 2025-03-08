import React from 'react';
import "./Panel.css";
import CoinCard from "./CoinCard";
import One from "./Coin-Images/One.png";
import Two from "./Coin-Images/Two.png";
import Five from "./Coin-Images/Five.png";
import Ten from "./Coin-Images/Ten.png";
import Twenty from "./Coin-Images/Twenty.png";
export default class Panel extends React.Component{
   constructor(props){
    super(props);
    this.state ={
        coinOneCounter:0,
        coinTwoCounter:0,
        coinFiveCounter:0,
        coinTenCounter:0,
        coinTwentyCounter:0,

    };
   }
   increamentCounter = (coin) => {
    if (coin =="ONE"){
        this.setState({coinOneCounter: (this.state.coinOneCounter += 1)})
    }
    else  if (coin =="TWO"){
        this.setState({coinTwoCounter: (this.state.coinTwoCounter += 1)})
    }
    else  if (coin =="FIVE"){
        this.setState({coinFiveCounter: (this.state.coinFiveCounter += 1)})
    }
    else  if (coin =="TEN"){
        this.setState({coinTenCounter: (this.state.coinTenCounter += 1)})
    }
    else  {
        this.setState({coinTwentyCounter: (this.state.coinTwentyCounter += 1)})
    }
   }
    render(){
        return(
            <div className="panel">
               <CoinCard 
               imageName ={One}
               coinText = {"ONE"}
               coinCounter = {this.state.coinOneCounter}
               onCoinClick = {this.props.onCoinClick}
               increamentCounter = {this.increamentCounter}
               
               />
                <CoinCard 
               imageName ={Two}
               coinText = {"TWO"}
               coinCounter = {this.state.coinTwoCounter}
               onCoinClick = {this.props.onCoinClick}
               increamentCounter = {this.increamentCounter}
               />
                <CoinCard 
               imageName ={Five}
               coinText = {"FIVE"}
               coinCounter = {this.state.coinFiveCounter}
               onCoinClick = {this.props.onCoinClick}
               increamentCounter = {this.increamentCounter}
               />
                <CoinCard 
               imageName ={Ten}
               coinText = {"TEN"}
               coinCounter = {this.state.coinTenCounter}
               onCoinClick = {this.props.onCoinClick}
               increamentCounter = {this.increamentCounter}
               />
                <CoinCard 
               imageName ={Twenty}
               coinText = {"TWENTY"}
               coinCounter = {this.state.coinTwentyCounter}
               onCoinClick = {this.props.onCoinClick}
               increamentCounter = {this.increamentCounter}
               />
            </div>
        )
    }
}