import React, { Component } from 'react';

class Controller extends Component {
	constructor(props) {
		super(props);
		
		this.setPlayer = this.setPlayer.bind(this);
		this.setMonster = this.setMonster.bind(this);
		this.setTile = this.setTile.bind(this);
	}
	
	setPlayer(Player){
		//calls the method in App.js  
		this.props.setPlayer(Player);
	}
	setMonster(){	}
	setTile(){
		return this.state;
	}

	// moveLeft() {
	// 	console.log("moving left");
	// }

	// moveUp() {
	// 	console.log("moving up");
	// }

	// moveRight() {
	// 	console.log("moving right");
	// }

	// moveDown() {
	// 	console.log("moving down");
	// }
	
	handleKeyPress(e){
		// LEFT keycode = 37
		if (e.which == 37) {
			//this.moveLeft();
			console.log("moving left");
			p = this.props.Player;
			p.setXPos(p.getXPos() - 1);
			this.setPlayer(p);
			console.log("current x pos = " + p.getXPos());
		}
		// UP keycode = 38
		else if (e.which == 38) {
			//this.moveUp();
		}
		// RIGHT keycode = 39
		else if (e.which == 39) {
			//this.moveRight();
		}
		// DOWN keycode = 40
		else if (e.which == 40) {
			//this.moveDown();
		}
		else {
			console.log("Another key pressed");
		}
	}
	
	handleClick(e){
		console.log("mouse_click");	
	}
		
	
	render(){
		var style = {position: "fixed", top:0, bottom:0, left:0, right:0, background:"rgba(0,0,0,0)"} 
		document.addEventListener("onkeydown", this.handleKeyPress);
		return(
			
			<div style = {style} onClick = {this.handleClick} onKeyDown = {this.handleKeyPress} tabIndex = "0" >  </div>
			
			)
		
	}
	
}

export default Controller;