import React, { Component } from 'react';
class Layout extends Component {
	
	render() {
		var Player = this.props.Player;
		var y = "string"
    return (
    	<div> Character HIT POINTS: {Player.expose().HP} 
    	Layout Goes HERE </div>
    	
     )}
}


export default Layout;
