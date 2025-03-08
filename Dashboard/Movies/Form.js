import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      Duration: "",
      movieDirector: "",
      moviePoster: "", // New field for movie poster URL
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handle form submission
  submitFunction = (event) => {
    event.preventDefault();
    const { movieName, Duration, movieDirector, moviePoster } = this.state;

    // Validate inputs before adding
    if (movieName.trim() && Duration.trim() && movieDirector.trim() && moviePoster.trim()) {
      this.props.addMovie({ movieName, Duration, movieDirector, moviePoster });

      // Reset form fields after submission
      this.setState({ movieName: "", Duration: "", movieDirector: "", moviePoster: "" });
    }
  };

  render() {
    return (
      <div className="form-panel">
        <h2>Add a Movie</h2>
        <form onSubmit={this.submitFunction}>
          <label>Movie Name:</label>
          <input
            type="text"
            name="movieName"
            value={this.state.movieName}
            onChange={this.handleChange}
            placeholder="Enter Movie Name"
          />

          <label>Duration (in minutes):</label>
          <input
            type="text"
            name="Duration"
            value={this.state.Duration}
            onChange={this.handleChange}
            placeholder="Enter Movie Duration"
          />

          <label>Director:</label>
          <input
            type="text"
            name="movieDirector"
            value={this.state.movieDirector}
            onChange={this.handleChange}
            placeholder="Enter Director Name"
          />

          <label>Movie Poster URL:</label>
          <input
            type="text"
            name="moviePoster"
            value={this.state.moviePoster}
            onChange={this.handleChange}
            placeholder="Enter Image URL"
          />

          <button type="submit" className="submit-btn">Add Movie</button>
        </form>
      </div>
    );
  }
}
