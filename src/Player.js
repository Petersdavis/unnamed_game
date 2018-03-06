import Tile from './Components/Tile'

class Player {
	constructor() {

		var tile = new Tile(100)
		this.state = {
			tile:tile,
			name:"Unnamed",
			HP:30,
			SP:30,
			Str:9,
			Dex:9,
			xPos: 0,
			yPos: 0
		}
		
	}
	getTile(){
		return this.state.tile;
	}
	getXPos() {
		return this.state.xPos;
	}

	getYPos() {
		return this.state.yPos;
	}

	setXPos(x) {
		this.state.xPos = x;
	}

	setYPos(y) {
		this.state.yPos = y;
	}
	
	saveChar(){	}
	loadChar(){	}
	expose(){
		return this.state;
	}
	
	
}

export default Player;