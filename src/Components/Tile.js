//import Tiles from './Tiles';
class Tile{
	
	constructor(y, x) {
		
		this.state = {
			x:x,
			y:y,
			floor_id:0,
			floor_ascii:"#",
			objs:[],
			monsters:[]
		}
		
		this.expose = this.expose.bind(this);
		this.addObj = this.addObj.bind(this);
		this.addMonst = this.addMonst.bind(this);
		this.removeObj = this.removeObj.bind(this);
		this.removeMonst = this.removeMonst.bind(this);
		this.dig = this.dig.bind(this);
		
	}
	
	addObj(){}
	addMonst(){}
	removeObj(){}
	removeMonst(){}
	dig(){
		var tile = this.state
		if(tile.floor_id === 0){
			//this is a wall
			
			tile.floor_id = 1;
			tile.floor_ascii = "0";
			
			
		}
		
	}
	
	expose(){
		return this.state;
	}
	
		
}

export default Tile;