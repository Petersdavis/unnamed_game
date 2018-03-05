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
		this.addRoom = this.addRoom.bind(this);
		this.rndX = this.rndX.bind(this);
		this.rndY = this.rndY.bind(this);
		this.getTile = this.getTile.bind(this);
		this.getWall = this.getWalls.bind(this);
		this.makeTunnel = this.makeTunnel.bind(this);
		this.newMap();
	}
	
	
	rndX(){	
		var x  = Math.floor(Math.random()*(this.state.width));
		return x;
	}
	
	rndY(){
		var y = Math.floor(Math.random()*(this.state.height));
		return y;
	}
	
	getTile(y, x){
		var tiles = this.state.tiles;
		if(y < this.state.height -1 && y >= 0 && x< this.state.width-1 && x>=0){

			return tiles[y][x];
		}else{
			return false;
		}
		
		
	}
	
	newMap(depth){
		const num_rooms = 1;
		var count;
		for(count = 0;count<num_rooms;++count){
			this.addRoom();
		}
		
		return this;
	}
	
	addRoom(){
		var x = this.rndX();
		var y =  this.rndY();
		var a;
	
		var tiles = [];
		var tile;
		var wall = [];
		var direction = "";
		
		var top = Math.floor(Math.random()*4);
		var bot =Math.floor(Math.random()*4);
		var left = Math.floor(Math.random()*4+1);
		var right =Math.floor(Math.random()*4+1);
		
		if(top+bot<2){top+1}
		if(left+right<2){left+1}
		
		var count1, count2, yy, xx;
		
		for(count1 = y-top;count1<y+bot;++count1){
			for(count2=x-left;count2<x+right;++count2){
				if(tile =this.getTile(count1, count2)){
					tiles.push(tile);

				} 					
					
				}	
			}
		
		for(count1 = 0;count1<tiles.length;++count1){
			tiles[count1].dig();
		}
		
		wall = this.getWalls(x,y,top,right,bot,left);
		if(wall.length>0){
		 this.makeTunnel(wall[Math.floor(Math.random()*wall.length)], Math.floor(Math.random()*40));	
		}	
	}

	makeTunnel(tile, counter){
		//tile.dig();
	}
	
	getWalls(x, y, top, right, bot, left){
		var a;
		var wall = [];
		var tile = {};
		var count1;
		//top wall
			for(count1=x-left+1;count1<x+right-1;++count1){
				if(tile.tile =this.getTile(y-top-1, count1) ){
					tile.tile.state.floor_ascii = "X";
					tile.direction = "up"
					wall.push(tile);
				}
							
			}	
			
		//right wall
			for(count1=y-top+1;count1<y+bot-1;++count1){
				if(tile.tile =this.getTile(count1, x+right) ){
					tile.tile.state.floor_ascii = "Y";
					tile.direction  = "right"
					wall.push(tile);
				}
			
			}					
		
			//bottom wall
			for(count1=x-left+1;count1<x+right-1;++count1){
				if(tile.tile =this.getTile(y+bot, count1) ){
					tile.tile.state.floor_ascii = "Z";
					tile.direction  = "down"
					wall.push(tile);
				}
						
			}	
			
			//left wall
			
			for(count1=y-top+1;count1<y+bot-1;++count1){
				if(tile.tile =this.getTile(count1, x-left-1)){
					tile.tile.state.floor_ascii = "K";
					tile.direction  = "left"
					wall.push(tile);
				}
				
			}	
			
			
		return wall;
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