import React from "react";
import "./Header.css";
import ImdbLogo from "/Users/enjoy_16_b/Documents/Dashboard/Portfolio/src/Dashboard/Movies/Images/imdblogo.png";
import Searchbar from "./Searchbar";
import AddMovie from "./AddMovie";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="logo-image" src={ImdbLogo} alt="IMDB Logo" />
        <Searchbar />
        <AddMovie openForm={this.props.openForm} />
      </header>
    );
  }
}
