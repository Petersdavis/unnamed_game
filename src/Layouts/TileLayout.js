import React, { Component } from 'react';
import './Tiles.css';

class TileLayout extends Component {
		
	render(){
		var class_name = this.props.tile.name;	
		return(
			<div className = {class_name+ " " + "tile"}><div className ="absolute"> {this.props.ascii} </div></div>
			
			)
	}
}

export default TileLayout;