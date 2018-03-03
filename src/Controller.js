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
	
	handleKeypress(e){
		console.log("keypress");
	}
	
	handleClick(e){
		console.log("mouse_click");	
	}
		
	
	render(){
		var style = {position: "fixed", top:0, bottom:0, left:0, right:0, background:"rgba(0,0,0,0)"} 
		return(
			
			<div style = {style} onClick = {this.handleClick} onKeyPress = {this.handleKeypress} >  </div>
			
			)
		
	}
	
}

export default Controller;