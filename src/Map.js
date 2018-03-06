import Tile from './Components/Tile'

class Room {
	constructor(x,y){
		
		this.newRoom =this.newRoom.bind(this);
		this.newRoom(x,y)

	}

	dig(){
		var x;
		for(x=0;x<this.tiles.length;++x){
			this.tiles[x].dig();
		}


	}

	rndX(){
		var x  = Math.floor(Math.random()*(this.right-this.left + 1))+this.left;
		return x;

	}

	rndY(){
		var y  = Math.floor(Math.random()*(this.bot - this.top +1)) +this.top;
		return y;
	}

	isInRoom(x,y){
			
			if(this.bot > y && this.top < y && this.right > x && this.left < x){
				return true;
			}
			return false;
		}
	

		newRoom(x,y){
			
		var tile;
				
		this.top = Math.max(0, y-Math.floor(Math.random()*4));
		this.bot = Math.min(this.state.height, y+ Math.floor(Math.random()*4));
		this.left =Math.max(0, x-Math.floor(Math.random()*4+1));
		this.right =Math.min(this.state.width,x+Math.floor(Math.random()*4+1));
		this.is_connected = false;
		
		while(this.bot - this.top<2){
			if(this.top > this.height/2){
				this.top -=1
			}else{
				this.bot +=1
			}
		}
		while(this.right-this.left<2){
			if(this.left > this.width/2){
				this.left -=1
			}else{
				this.right +=1
			}
		}
		
		var count1, count2;
		
		for(count1 = this.top;count1<this.bot;++count1){
			for(count2=this.left;count2<this.right;++count2){
				tile = this.getTile(count1, count2)
				if(tile){
					this.tiles.push(tile);
				} 					
				
				}	
			}
		
	}
	

}


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
				this.state.tiles[y][x] = new Tile(y, x);
			}
		}
			
		
		this.expose= this.expose.bind(this);
		this.newMap = this.newMap.bind(this);
		this.rndX = this.rndX.bind(this);
		this.rndY = this.rndY.bind(this);
		this.getTile = this.getTile.bind(this);
		
		
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
		if(y < this.state.height && y >= 0 && x< this.state.width && x>=0){

			return tiles[y][x];
		}else{
			return false;
		}
		
		
	}
	
	newMap(depth){
		const num_rooms = 7;
		var count;
		var count2;
		var room;
		var rooms = [];
		var corridors = [];
				
		while(rooms.length<num_rooms && count <50){
			count = 0
			while(this.intersects(room, rooms)||count2>50){
				room = new Room(this.rndX, this.rndY);
				count +=1
			}
			if(count<50){
				room.dig();
				rooms.push(room)
			}
		}

		count = 0
		room = this.getDisconnectedRooms(rooms, corridors)
		
		while(room && count<500){
			this.makeConnection(room, corridors, rooms)
			room = this.getDisconnectedRooms(rooms, corridors)
			count+=1
		}
		

		for(count=0;count<rooms.length;++count){
			console.log(count);
			rooms[count].dig();

		}
		return this;
	}

	makeConnection(room, corridors, rooms){
		var x1 = room.rndX();
		var y1 = room.rndY();
		var x2, y2;
		var a ;
		var coin_flip = Math.floor(Math.random()*2);
		for (a=0;a<rooms.length;++a){
			if(rooms[a].is_connected||a===rooms.length -1){
				x2 = rooms[a].rndX();
				y2 = rooms[a].rndY();
			}

			if(coin_flip){
				if(!this.makeCorridor(x2,y2,x2,y1,rooms,corridors)){
					if(!this.makeCorridor(x2,y1,x1,y1,rooms,corridors)){
						room.is_connected = true;
					}
				}
			}else{
				if(!this.makeCorridor(x2,y2,x1,y2,rooms,corridors)){
					if(!this.makeCorridor(x1,y2,x1,y1,rooms,corridors)){
						room.is_connected = true;
					}
				}
			}
			
		}
	 
	}

	makeCorridor(x1,y1,x2,y2,rooms,corridors){
		var a,b;
		var curr_x, curr_y
		var corridor = {}
		corridor.x1 = x1;
		corridor.x2 = x2;
		corridor.y1 = y1;
		corridor.y2 = y2;
		corridor.tiles = [];
		var tile;
		if(x1 === x2){
			curr_x = x1;
			for(a=0;a<Math.abs(y2-y1);++a){
				if(y2>y1){
					curr_y = y1+a;
				}else{
					curr_y = y1-a;
				}
				tile = this.getTile(curr_y, curr_x)
				corridor.tiles.push(tile)
			}
		}else{
				curr_y = y1;
				for(a=0;a<Math.abs(x2-x1);++a){
					if(x2>x1){
						curr_x = x1+a;
					}else{
						curr_x = x1-a;
					}
					tile = this.getTile(curr_y, curr_x)
					corridor.tiles.push(tile)

				}
		}
		
		for(a=0;a<corridor.tiles.length;++a){
		
			for(b=0;b<rooms.length;++b){
				if(rooms[b].isInRoom(curr_x,curr_y)&&!rooms[b].is_connected){
					rooms[b].is_connected = 1;
					return true
				}

			}
				
		}
		
		return false;
	
	}
		
	getDisconnectedRooms(rooms, corridors){
		var x,y;
		var x1,x2,y1,y2;
		var room;
		for(y=0;y<rooms.length;++y){
			room = rooms[y];
			if(room.is_connected){
				continue;
			}else{
				for(x=0;x<corridors.length;++x){
					x1=corridors[x].x1
					x2=corridors[x].x2
					y1=corridors[x].y1
					y2=corridors[x].y2
					
					if (room.top < y1 && room.bot > y1 &&  room.left<x1 && room.right>x1){
						room.is_connected = true;
					} else if (room.top < y2 && room.bot > y2 &&  room.left<x2 && room.right>x2){
						room.is_connected = true;
					}else if(y1 === y2 && room.top < y1 && room.bot > y1 && rooms.left > x1 && rooms.right <x2) {
						room.is_connected = true;
					}else if(x1 === x2  && room.left < x1 && room.right > x1 && rooms.top > y1 && rooms.bot <y2){
						room.is_connected = true;
					}
				}

			}
			
			if(!room.is_connected){
				return room;
			}
									
		}
		return false;
		
	}



	intersects(room, rooms){
		var a;
		
		for(a=0;a<rooms.length;++a){
			var compare_room = rooms[a]
			if(compare_room.bot > room.top && compare_room.bot < room.bot && compare_room.right > room.left && compare_room.right < room.right){
				return true;
			}
			if(compare_room.top > room.top && compare_room.top < room.bot && compare_room.right > room.left && compare_room.right < room.right){
				return true;
			}
			if(compare_room.top > room.top && compare_room.top < room.bot && compare_room.left > room.left && compare_room.left < room.right){
				return true;
			}
			if(compare_room.bot > room.top && compare_room.bot < room.bot && compare_room.left > room.left && compare_room.left < room.right){
				return true;
			}
			if(compare_room.bot > room.bot && compare_room.top < room.top && compare_room.left < room.left && compare_room.right > room.right){
				return true;
			}
			
		}
		return false;
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