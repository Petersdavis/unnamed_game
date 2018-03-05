 import React, { Component } from 'react';
import TileLayout from './TileLayout';


class MapLayout extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
		
	}
	handleClick(e){
		console.log("Map Clicked")
	}
			
	render(){
		const style = {position:"relative", top:0, bottom:0, left:0, right:0};
		var Map = this.props.Map.state;
		var x, y;
		var fragment = [];
		var row;
		var tile
		
		for(y=0;y<Map.height;++y){
			
			row = [];
			for(x=0;x<Map.width;++x){
				tile = Map.tiles[y][x].state;
				row.push(
					<TileLayout key = {x} floor_ascii = {tile.floor_ascii} />
					);
			}
			
			fragment.push(
				<div key = {y}>
				  {row}
				</div>
				);
			}
			
		return(
			<div style = {style} onClick ={this.handleClick}
			>
			{fragment}
			</div>
			
			)
		
	}
	
}

export default MapLayout;