import Tile from './Components/Tile'

class Map{
	constructor(width, height) {
		this.state = {
			tiles:[]
			depth:0
		}
		
		var x, y; 
		for(y=0;y<height;++y){
			this.state.tiles[y] = [];
			for(x=0;x<width;++x){
				this.state.tiles[y][x] = new Tile();
			}
		}
			
		
		this.expose= this.expose.bind(this);
		this.newMap = this.newMap.bind(this);
		this.getTile = this.getTile.bind(this);
		
	}
	
	getTile(x,y){}
	newMap(){}
	
	expose(){
		return this.state;	
	}
}

export default Map;