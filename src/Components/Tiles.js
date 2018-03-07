class Tiles{
	constructor(id){
		switch(id){
			case 100:
				this.data = {
					id:0,
					name:"player",
					ascii:"@",
					IS_WALKABLE:1
				};
				break;
			case 8:
			case 7:
			case 6:
				this.data = {
					id:6,
					name:"door",
					ascii:"%",
					IS_WALKABLE:0,
					IS_OPEN:0
				};
			break; 
			case 5:
				this.data = {
					id:5,
					name:"chair",
					ascii:"%",
					IS_WALKABLE:1
				};
			break; 
			case 4:
				this.data = {
					id:4,
					name:"table",
					ascii:"%",
					IS_WALKABLE:1
				};
				break; 
			case 3:
				this.data = {
					id:3,
					name:"stair-up",
					ascii:"<",
					IS_WALKABLE:1
				};
				break; 
			case 2:
				this.data = {
					id:2,
					name:"stair-down",
					ascii:">",
					IS_WALKABLE:1
				};
				break; 
			case 1:
				this.data = {
					id:1,
					name:"floor",
					ascii:" ",
					IS_WALKABLE:1
				};
				break;

			default:
				this.data = {
					id:0,
					name:"wall",
					ascii:" ",
					IS_WALKABLE:0
				};

			break;
					
		}
	}
}
	
	

export default Tiles;
