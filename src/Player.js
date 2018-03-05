import React, { Component } from 'react';

class Player {
	constructor() {
		this.state = {
			name:"Unnamed",
			HP:30,
			SP:30,
			Str:9,
			Dex:9,
			xPos: 0,
			yPos: 0
		}
		
		this.expose = this.expose.bind(this);
		this.saveChar = this.saveChar.bind(this);
		this.loadChar = this.loadChar.bind(this);
	}

	getXPos() {
		return xPos;
	}

	getYPos() {
		return yPos;
	}

	setXPos(x) {
		xPos += x;
	}

	setYPos(y) {
		yPos += y;
	}


	
	saveChar(){	}
	loadChar(){	}
	expose(){
		return this.state;
	}
	
	
}

export default Player;