import React from "react";
import "./Header.css";

export default class Searchbar extends React.Component{
    render(){
        return(
            <>
            <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
            </>
        )
    }
}