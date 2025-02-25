import React, { Component } from "react";
import "./Dashboard.css";
import Amazon from "../Amazon/Amazon";
import Movies from "../Movies/Movies";
import CoinDashboard from "../Coin-Exercise/CoinDashboard";
import Actors from "../TopActors/Actors";
import IndianPlayers from "../Cricketers/IndianPlayer";
import Tables from "../Tables/Tables";
import Bulb from "../Bulb/Bulb";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
      title: "",
    };
  }

  onButtonClick = (project) => {
    this.setState({
      title: project.title,
      selectedProject: project.component,
    });
  };

  render() {
    const projects = [
      {
        id: 1,
        title: "Amazon",
        description: "",
        bgImage: "https://etimg.etb2bimg.com/photo/114184053.cms",
        component: <Amazon />,
      },
      {
        title: "IMDB Ratings",
        description: "",
        bgImage: "https://yt3.googleusercontent.com/v9COMuQA-lnNR2j16Ufm8Sx82NgvXCiFU-AE-DYkd51wqRYuG0HLVhBvuDTsCaAs-iSL7lON=s900-c-k-c0x00ffffff-no-rj",
        component: <Movies />,
      },
      {
        title: "Coin Counter",
        description: "",
        bgImage: "https://static.toiimg.com/thumb/msid-115813312,width-1280,height-720,resizemode-4/115813312.jpg",
        component: <CoinDashboard />,
      },
      {
        title: "Top Actors",
        description: "",
        bgImage: "https://r2.erweima.ai/imgcompressed/img/compressed_8d02c71277e037bccfb6a161953c4424.webp",
        component: <Actors />,
      },
      {
        title: "Cricket Team",
        description: "",
        bgImage: "https://indianetzone.wordpress.com/wp-content/uploads/2020/01/b97ea33b5842c7894b804923c6c05580-e1579256969999.jpg?w=1200",
        component: <IndianPlayers />,
      },
      {
        title: "Multiplication Table",
        description: "",
        bgImage: "https://i.ytimg.com/vi/glkQwKA5_PU/hqdefault.jpg",
        component: <Tables />,
      },
      {
        title: "Bulb",
        
        description: "",
        bgImage: "https://hykoont.com/cdn/shop/articles/pikaso_texttoimage_35mm-film-photography-wall-bulb-high-detail-214475.jpg?v=1729136654&width=2048",
        component: <Bulb />,
      },
    ];

    return (<>
      <div className="dashboard-container" id="dashboard-container">
        <div className="about" id="about"><h1>Welcome to the React js </h1></div>
        <div className="project-list-row">
          {projects.map((project, index) => (
            <a href="#project-list">
            <div key={index} className="project-card">
              <div
                className="card-body"
                onClick={() => this.onButtonClick(project)}
                style={{
                  backgroundImage: `url(${project.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <button
                  className="project-button"
                  onClick={() => this.onButtonClick(project)}
                >
                  {project.title}
                </button>
              </div>
            </div></a>
          ))}
        </div>
        <div className="selected-project-container" id="project-list">
          <h3 className="selected-project-title">{this.state.title}</h3>
          <div className="selected-project-content">{this.state.selectedProject}</div>
        </div>
        <div className="last-button"><button className="btn"><a href="#about">Back To Top</a></button></div>
      </div>
     
      </>);
  }
}
