import React, { Component } from 'react';
import MapLayout from './Layouts/MapLayout';

class Layout extends Component {
	
	render() {
		//var Player = this.props.Player;
		//var y = "string"
    return (
    	<MapLayout Map = {this.props.Map} Player = {this.props.Player}  />    	
    	    	
     )}
}


export default Layout;
