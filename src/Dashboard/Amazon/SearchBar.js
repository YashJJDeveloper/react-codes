import React from "react";
import "./Header.css";

export default class SearchBar extends React.Component{
    render(){
        return(
            <>
            <div className="amazon-search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
            </>
        )
    }
}