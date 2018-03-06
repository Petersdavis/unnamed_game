import React, { Component } from 'react';


class TileLayout extends Component {
	constructor(props) {
		super(props);
		console.log("empty constructor")
	}
	
	render(){
		
		return(
			<span>{this.props.ascii} </span>
			
			)
	}
}

export default TileLayout;