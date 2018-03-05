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
		this.getWall = this.getWall.bind(this);
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
		return tiles[y][x];
	}
	
	newMap(depth){
		const num_rooms = 6;
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
		var wall = [];
		var direction = "";
		
		var top = Math.floor(Math.random()*4);
		var bot =Math.floor(Math.random()*4);
		var left = Math.floor(Math.random()*4);
		var right =Math.floor(Math.random()*4);
		
		if(top+bot<2){top+1}
		if(left+right<2){left+1}
		
		var count1, count2, yy, xx;
		
		for(count1 = y-top;count1<y+bot;++count1){
			for(count2=x-left;count2<x+right;++count2){
				if(count1 < this.state.height && count1 >= 0 && count2 <this.state.width && count2 >= 0){
					tiles.push(this.getTile(count1, count2));
					
					}
				}	
			}
		
		for(count1 = 0;count1<tiles.length;++count1){
			tiles[count1].dig();
		}
		
		wall = getWall(x,y,top,right,bot,left)
		makeTunnel(wall[Math.floor(Math.random()*wall.length)+1], Math.floor(Math.random()*40);		
	}

	makeTunnel(tile, counter){
		tile.dig();
	}
	
	getWall(x, y, top, right, bot, left){
		
		var wall = [];
		var count1;
		
		switch(a = Math.random()){
			
		case a<0.25:
			//top wall
			for(count1=x-left+1;count1<x+right-1;++count1){
				wall.push(this.getTile(y-top-1, count1))			
			}	
			wall.direction = "up"
		
			break;
		case a>0.25 && a<0.5:
			//right wall
			for(count1=y-top+1;count1<y+bot-1;++count1){
				wall.push(this.getTile(count1, x+right+1))			
			}	
			wall.direction  = "right"
			
			break;
			
		case a>0.5 && a<0.75:
			//bottom wall
			for(count1=x-left+1;count1<x+right-1;++count1){
				wall.push(this.getTile(y+bot+1, count1))			
			}	
			wall.direction  = "down"
			
			break;
		case a>0.75:
			//left wall
			
			for(count1=y-top+1;count1<y+bot-1;++count1){
				wall.push(this.getTile(count1, x-left-1))			
			}	
			wall.direction  = "right"
			break;
		default:
			break;
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