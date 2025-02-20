import React from "react";
import "./Header.css";

export default class AddMovie extends React.Component {

 
  render() {
    return (
      <>
        <button className="add-button" onClick={()=>this.props.openForm()}>
          <img
            src="https://www.freeiconspng.com/uploads/cart-icon-16.png"
            style={{ height: "3vw", width: "3vw", background: "none" }}
          />
        </button>
      </>
    );
  }
}
