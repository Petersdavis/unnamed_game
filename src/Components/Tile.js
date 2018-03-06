import Tiles from './Tiles';

class Tile{
	
	constructor(id, xy) {
		id = id || 0;
		xy = xy || {x:-1, y:-1};
		var tile;
		tile = new Tiles(id)
		this.state = tile.data;
		
		this.state.xy=xy;
				
	}

	changeTile(new_id){
		var xy = this.state.xy
		var tile
		tile = new Tiles(new_id)
		this.state = tile.data;
		this.state.xy = xy;

	}
	addObj(){}
	addMonst(){}
	removeObj(){}
	removeMonst(){}
	dig(){
		var tile = this.state
		if(this.state.id === 0){
			//this is a wall
			this.changeTile(1);			
		}
		
	}
	
	expose(){
		return this.state;
	}
	
		
}

export default Tile;