import Tile from './Components/Tile'

class Map {
	constructor(height, width) {
		this.state = {
			width:width,
			height:height,
			tiles:[],
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
		this.addRoom = this.addRoom.bind(this);
		
		this.newMap();
	}
	
	getTile(x,y){}
	newMap(depth){
		const num_rooms = 6;
		var count;
		for(count = 0;count<num_rooms;++count){
			this.addRoom();
		}
		
		return this;
	}
	
	addRoom(){
		var x  = Math.floor(Math.random()*(this.state.width));
		var y = Math.floor(Math.random()*(this.state.height));
		var tiles = this.state.tiles;
		tiles[y][x].dig();
		var height = Math.floor(Math.random()*4+2);
		var width = Math.floor(Math.random()*4+2);
		var count1, count2, yy, xx;
		
		for(count1 = 0;count1<height;++count1){
			for(count2=0;count2<width;++count2){
				if(count1 + y < this.state.height){
					if(count2 + x < this.state.width){
						tiles[count1 + y][count2 + x].dig();
						
						
					}
					
					
				}
					
			}
		}
		
		
		
		
		
		
	}
	
	expose(){
		return this.state;	
	}
	
	render(){
		return(null
			
			)
	}
}

export default Map;