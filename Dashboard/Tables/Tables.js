import React from "react";
import "./Tables.css";

class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tableOf: 1 };
  }
  renderCell = (tableOf, number) => {
    return (
      <div className="row">
        <button className="cell-button">{tableOf}</button>
        <text className="multi"> {" X "}</text>
        <button className="cell-button">{number}</button>
        <text className="multi"> {" = "}</text>
        <button className="cell-button">{tableOf * number}</button>
      </div>
    );
  };
  renderTable = () => {
    let i = 1;
    let array = [];
    while (i <= 10) {
      array.push(this.renderCell(this.state.tableOf, i));
      i++;
    }
    return array;
  };

 
  renderTableOf = () => {
    let i = 1;
    let array = [];
    while (i <= 10) {
      let index = i;

      let clickbutton = (
        <button
          className="cell-button text-dark"
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => {
            this.buttonClicked(index);
          }}
        >
          {index}
        </button>
      );
      array.push(clickbutton);
      i++;
    }
    return <div className="row">{array}</div>;
  };
  buttonClicked = (index) => {
    console.log(index);
    this.setState({ tableOf: index });
  };
  
  render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        {this.renderTable()}
      </div>
    );
  }
}

export default Tables;
