import React from "react";
import "./Movies.css";
import Header from "./Header";
import Form from "./Form";
import Panel from "./Panel";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: [], // Stores added movies
      showForm: false, // Controls which panel is shown
    };
  }

  // Function to show form
  openForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  // Function to add a movie and return to movie list
  addMovie = (movie) => {
    console.log("Added movie:", movie);
    this.setState((prev) => ({
      movieArray: [movie, ...prev.movieArray], // Add new movie at the top
      showForm: false, // Switch back to Panel view
    }));
  };

  render() {
    return (
      <div className="movies-container">
        <Header openForm={this.openForm} />
        {this.state.showForm ? (
          <Form addMovie={this.addMovie} />
        ) : (
          <Panel movieArray={this.state.movieArray} openForm={this.openForm} />
        )}
      </div>
    );
  }
}
