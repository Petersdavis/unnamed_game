class Tile{
	constructor() {
		this.state = {
			floor_id:1,
			objs:[],
			monsters:[]
		}
		
		this.expose = this.expose.bind(this);
		this.addObj = this.addObj.bind(this);
		this.addMonst = this.addMonst.bind(this);
		this.removeObj = this.removeObj.bind(this);
		this.removeMonst = this.removeMonst.bind(this);
	}
	
	addObj(){}
	addMonst(){}
	removeObj(){}
	removeMonst(){}
	
	expose(){
		return this.state;
	}
	
	
}

export default Tile;