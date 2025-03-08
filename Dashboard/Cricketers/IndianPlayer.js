import React from "react";
import "./Players.css";

class IndianPlayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score1: 0,
      lastButtonClicked: null, // Tracks the last clicked button
      players: [
        {
          className:"indian-players",
          name: "Rohit Sharma",
          visible: true,
          image: "https://static-files.cricket-australia.pulselive.com/headshots/440/10915-camedia.png",
        },
        {
          className:"indian-players",
          name: "Virat Kohli",
          visible: true,
          image: "https://images-cricketcom.imgix.net/virat-kohli-1630685258752",
        },
        {
          className:"indian-players",
          name: "Yashaswi Jaiswal",
          visible: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5gPcaVP0hKwiKluKbv-nvM1MVsSMgbze_ciX77UNhuZhQx3VDsE8vZh7d8QNQO9z2Ys&usqp=CAU",
        },
        {
          className:"indian-players",
          name: "Shubhman Gill",
          visible: true,
          image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322697.1.png",
        },
        {
          className:"indian-players",
          name: "Rishabh Pant",
          visible: true,
          image: "https://media.sportstiger.com/players/RishabhPant22-06-2021-06-44-19.png",
        },
        {
          className:"indian-players",
          name: "Ravindra Jadeja",
          visible: true,
          image: "https://images.news18.com/ibnlive/uploads/2022/03/ravindra-jadeja-century-afp-1.jpg",
        },
        {
          className:"indian-players",
          name: "Nitish Kumar Reddy",
          visible: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoauDeyLXnpX8xmOlFiilo36yy49Je3ZXiuQ&s",
        },
        {
          className:"indian-players",
          name: "Bhuvi",
          visible: true,
          image: "https://cricfit.com/wp-content/uploads/2020/05/269860-840x840.jpg",
        },
        {
          className:"indian-players",
          name: " Washington Sundar",
          visible: true,
          image: "https://static-files.cricket-australia.pulselive.com/headshots/288/10947-camedia.png",
        },
        {
          className:"indian-players",
          name: "Jasprit Bumrah",
          visible: true,
          image: "https://static-files.cricket-australia.pulselive.com/headshots/440/10982-camedia.png",
        },
        {
          className:"indian-players",
          name: "Mohd Shami",
          visible: true,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITwWea-jY9aMh8H2EM5syz2cnd1m0k3-81SumBiec5shvGDLPAG_r7ebH4w9zlZ4ur-g&usqp=CAU",
        },
      ],
    };
  }

  // Increment score and hide button for clicked player
  counterScoreOne = (playerName) => {
    this.setState((prevState) => ({
      score1: prevState.score1 + 1,
      lastButtonClicked: playerName,
     
    }));
  };
  removeScoreOne = (playerName) => {
    this.setState((prevState) => ({
      players: prevState.players.map((player) =>
        player.name === playerName ? { ...player, visible: false } : player
      ),}))
    }

  // Render display for Team One score
  renderDisplayOne = () => {
    let textColor = { color: "white" };

    if (this.state.lastButtonClicked === "Rohit Sharma" || "Shubhman Gill"|| "Virat Kohli"|| "Yashaswi Jaiswal"|| "Rishabh Pant"|| "Nitish Kumar Reddy") {
      textColor = { color: "green" };
    } else if (this.state.lastButtonClicked === "Ravindra Jadeja"|| "Washington Sundar") {
      textColor = { color: "yellow" };
    } else if (this.state.lastButtonClicked === "Jasprit Bumrah", "Bhuvaneshwar Kumar", "Mohd Shami") {
      textColor = { color: "red" };
    }

    return (
      <div>
        <h1 style={textColor}>
          {this.state.score1}
          {this.state.lastButtonClicked && (
            <div>{this.state.lastButtonClicked}</div>
          )}
        </h1>
      </div>
    );
  };

  // Render buttons and images for Team One
  renderTeamOne = () => {
    return (
      <div className="team1">
        {this.state.players.map(
          (player, index) =>
            player.visible && (
              <div key={index} className="player-card">
                <img
                  src={player.image}
                  alt={player.name}
                  className="indian-players"
                />
               <div className="players-buttons">
               <button
                  className="player-btn"
                  onClick={() => this.counterScoreOne(player.name)}
                >
                 Add runs 
                </button>
                <button
                  className="player-btn"
                  onClick={() => this.removeScoreOne(player.name)}
                >
                 Wicket 
                </button>
               </div>
              </div>
            )
        )}
      </div>
    );
  };

  // Main render function
  render() {
    return (
      <div className="container">
        <div>
          {this.renderDisplayOne()}
          {this.renderTeamOne()}
        </div>
      </div>
    );
  }
}


export default IndianPlayers;

