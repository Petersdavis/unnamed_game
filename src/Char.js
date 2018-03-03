import React, { Component } from 'react';

class Char {
	constructor() {
		this.state = {
			name:"Unnamed",
			HP:30,
			SP:30,
			Str:9,
			Dex:9
		}
		
		this.exposeChar = this.exposeChar.bind(this);
		this.saveChar = this.saveChar.bind(this);
		this.loadChar = this.loadChar.bind(this);
	}
	
	saveChar(){	}
	loadChar(){	}
	exposeChar(){
		return this.state;
	}
	
	
}

export default Char;