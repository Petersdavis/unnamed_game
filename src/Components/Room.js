class Room {
	constructor(x,y, width, height){
		this.tiles = [];
		this.newRoom =this.newRoom.bind(this);
		this.newRoom(x,y, width, height)

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
	

		newRoom(x,y, width, height){
			
		var tile;
				
		this.top = Math.max(0, y-Math.floor(Math.random()*4));
		this.bot = Math.min(height-1, y+ Math.floor(Math.random()*4));
		this.left =Math.max(0, x-Math.floor(Math.random()*4+1));
		this.right =Math.min(width-1,x+Math.floor(Math.random()*4+1));
		this.is_connected = false;
		
		while(this.bot - this.top<2){
            console.log(this.bot-this.top)
			if(this.top > 2  && this.top > this.height/1.5){
				this.top -=1
			}else if (this.bot < height - 2 && this.bot <this.height/1.5){
				this.bot +=1
			}else{
                break;
            }
		}
		while(this.right-this.left<2){
            console.log(this.right-this.left)
			if(this.left > 2 && this.left > this.width/1.5){
				this.left -=1
			}else if(this.right < this.width- 2 && this.right < this.width/1.5){
				this.right +=1
			}else{
                break;
            }
		}
		
		var count1, count2;
		
		for(count1 = this.top;count1<=this.bot;++count1){
			for(count2=this.left;count2<=this.right;++count2){
				tile = {}
				tile.x = count2;
				tile.y = count1;
				this.tiles.push(tile);
							
				}	
			}
		
	}
}

export default Room;