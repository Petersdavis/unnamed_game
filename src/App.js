import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './Map.js';
import Layout from './Layout.js';
import Char from './Char.js';

class App extends Component {
	constructor(props){
		super(props);
		var x = new Char();
			
		this.state = {
			Character:x
		}
	}
  render() {
  	var character = new Char();
  	var hitpoints = character.state.HP
  	console.log(hitpoints);
  	  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <Layout
         	Char = {this.state.Character}
         />
        </p>
      </div>
    );
  }
}

export default App;
