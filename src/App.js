import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './Map.js';
import Layout from './Layout.js';
import Player from './Player.js';
import Controller from './Controller.js';

class App extends Component {
	constructor(props){
    super(props);
    var xy;
		var player = new Player();	
    var map = new Map(15, 30);
    xy = map.rndRoomXY();
    player.setXPos(xy.x);
    player.setYPos(xy.y);


		this.state = {
			Player:player,
			Map:map
		}
		
		
		this.setPlayer = this.setPlayer.bind(this);
	}
	
  setPlayer(Modified_Player){
  	var Player = this.state.Player;
  	Player = Modified_Player;
  	this.setState({Player});
  }
  
  setMap(Modified_Map){
  	var Map = this.state.Map;
  	Map = Modified_Map;
  	this.setState({Map});
  }
  
  render() {
  	 	  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
         <Controller
          Player = {this.state.Player}
         	setPlayer = {this.setPlayer}
         />
         <Layout
           	Map = {this.state.Map}
         	Player = {this.state.Player}
         />
        </div>
      </div>
    );
  }
}

export default App;
