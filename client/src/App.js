import React from "react";
import axios from "axios";
import Player from "./Player";
import ModeToggle from './ModeToggle';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Women's World Cup</h1>
        <ModeToggle />
        </div>

        <div className="players-container">
        {this.state.players ? (
          this.state.players.map(player => <Player player={player} />)
        ) : (
          <p>Loading</p>
        )}
        </div>
      </div>
    );
  }
}

export default App;
