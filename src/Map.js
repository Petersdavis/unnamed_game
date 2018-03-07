import Tile from './Components/Tile'
import Room from './Components/Room'

class Map {
	constructor(height, width) {
		this.state = {
			width:width,
			height:height,
			rooms:[],
			corridors:[],
			tiles:[],
			depth:0
		}
		
		var x, y, xy; 
		for(y=0;y<height;++y){
			this.state.tiles[y] = [];
			for(x=0;x<width;++x){
				xy = {x:x, y:y}
				this.state.tiles[y][x] = new Tile(0, xy);
			}
		}
			
				
		this.newMap();
	}

	rndRoomXY(){
		var a, xy;
		a= Math.floor(Math.random()*this.state.rooms.length);
		xy = {};
		xy.x = this.state.rooms[a].rndX();
		xy.y = this.state.rooms[a].rndY();

		return xy;	

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
		count = 0		
		while(rooms.length<num_rooms && count <50){
			count2 = 0
			room = new Room(this.rndX(), this.rndY(), this.state.width, this.state.height);
			while(this.intersects(room, rooms)||count2>50){
				room = new Room(this.rndX(), this.rndY(), this.state.width, this.state.height);
				count +=1
			}
			if(count<50){
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
				this.dig(rooms[count].tiles);
		}
		for(count=0;count<corridors.length;++count){
			this.dig(corridors[count].tiles);
		}

		this.state.rooms = rooms;
		this.state.corridors = corridors;
		
		this.makeStairs();
		//make a couple staircase. 
		
		
	
		return this;
	}
	
	makeStairs(){
		var xy;
		var tile;
		xy = this.rndRoomXY();
		tile = this.getTile(xy.y,xy.x);
		tile.changeTile(2);

		xy = this.rndRoomXY();
		tile = this.getTile(xy.y,xy.x);
		tile.changeTile(3)
	}

	makeConnection(room, corridors, rooms){
		var x1 = room.rndX();
		var y1 = room.rndY();
		var x2, y2;
		var a ;
		var coin_flip = Math.floor(Math.random()*2);
		for (a=0;a<rooms.length;++a){
			if(rooms[a] !== room && (rooms[a].is_connected||a===rooms.length -1)){
				x2 = rooms[a].rndX();
				y2 = rooms[a].rndY();
			}
		}
		if(coin_flip){
			if(!this.makeCorridor(x2,y2,x2,y1,rooms,corridors)){
				if(!this.makeCorridor(x2,y1,x1,y1,rooms,corridors)){
					room.is_connected = true;
					return true
				}
				return true;
			}
			return true;
		}else{
			if(!this.makeCorridor(x2,y2,x1,y2,rooms,corridors)){
				if(!this.makeCorridor(x1,y2,x1,y1,rooms,corridors)){
					room.is_connected = true;
					return true
				}
				return true;
				
			}
			return true;				
			
		}
		
	}
	
	makeCorridor(x1,y1,x2,y2,rooms,corridors){
		var a,b;
		var curr_x, curr_y
		var corridor = {}
		corridors.push(corridor)
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
				tile = {}
				tile.x = curr_x;
				tile.y = curr_y;
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
				tile = {}
				tile.x = curr_x;
				tile.y = curr_y;
				corridor.tiles.push(tile)

			}
		}
		
		for(a=0;a<corridor.tiles.length;++a){
			tile = corridor.tiles[a]
			for(b=0;b<rooms.length;++b){
				if(rooms[b].isInRoom(tile.x,tile.y)&&!rooms[b].is_connected){
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

	dig(tiles){
		var a = 0
		var tile;
		for(a=0;a<tiles.length;++a){
			tile = this.getTile(tiles[a].y, tiles[a].x)
			if(tile){
				tile.dig();
			}
		}
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

	
		

}

export default Map;