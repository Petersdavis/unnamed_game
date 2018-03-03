import React, { Component } from 'react';


class TileLayout extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render(){
		
		return(
			<span>{this.props.floor_ascii} </span>
			
			)
	}
}

export default TileLayout;