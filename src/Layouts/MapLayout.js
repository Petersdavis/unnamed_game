 import React, { Component } from 'react';
import TileLayout from './TileLayout';
import './Tiles.css'

class MapLayout extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
		
	}
	handleClick(e){
		console.log("Map Clicked")
	}
			
	render(){
		var player = this.props.Player;
		const style = {position:"relative", top:0, bottom:0, left:0, right:0};
		const row_style = {position:"relative", padding:0, margin:0, height:"16px"}
		var Map = this.props.Map.state;
		var x, y;
		var fragment = [];
		var row;
		var tile
		
		for(y=0;y<Map.height;++y){
			
			row = [];
			for(x=0;x<Map.width;++x){
				if(player.getXPos()===x && player.getYPos()===y){
					tile = player.getTile();
					tile = tile.state;
				}else if(false){
					//if monsters is on tile //if object is on tile 
				}else
				{
				tile = Map.tiles[y][x].state;

				}
				row.push(
					<TileLayout key = {x} tile = {tile} ascii = {tile.ascii} />
					);
			}
			
			fragment.push(
				<div style ={row_style} key = {y}>
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