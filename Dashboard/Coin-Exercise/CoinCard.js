import React from 'react';
import "./coincard.css"

export default class CoinCard extends React.Component{
   

    render(){
        return(
            
                <div className="coin-card" 
                onClick={() => {
                    this.props.onCoinClick(this.props.coinText);
                    this.props.increamentCounter(this.props.coinText)
                }}>
                    <img  className='coin-image' src={this.props.imageName}/>
                    <text className='coin-text'>{this.props.coinText}</text>
                    
                       {this.props.coinCounter ? (
                         <text className='coin-badge'>{this.props.coinCounter}</text>) : null}
                       
                    
                </div>
            
        )
    }
}