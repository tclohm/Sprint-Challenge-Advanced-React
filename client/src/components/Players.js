import React from "react";
import axios from "axios";

import "../App.css"

class Players extends React.Component {

	state = {
		players: [],
		serach_parameter: 'players'
	}

	componentDidMount() {
	  axios
	    .get(`http://localhost:5000/api/${this.state.serach_parameter}`)
	    .then( (response) => {
	      this.setState({ players: response.data })
	      console.log(response.data)
	    })
	    .catch( (error) => {
	      console.log("error:", error);
	    })
	}

	render() {

		return (
			<div className="stack">
				{this.state.players.map( (player) => (
	        <div className="card" key={player.id}>
	          <p>Name: {player.name}</p>
	          <p>Country: {player.country}</p>
	          <p>Search Count: {player.searches}</p>
	        </div>
	      ))}
			</div>
		);
	};
};

export default Players;