import React from "react";
import "./Header.css";

export default class AddMovie extends React.Component {

 
  render() {
    return (
      <>
        <button className="add-button" onClick={()=>this.props.openForm()}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJbYoCBfbIP-zQ-Sim-0aWqhIHQ9-l9z76g&s"
            style={{ height: "3vw", width: "3vw", background: "none" }}
          />Add Movies
        </button>
      </>
    );
  }
}
