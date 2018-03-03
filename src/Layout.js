import React, { Component } from 'react';
class Layout extends Component {
	
	render() {
		var Char = this.props.Char;
		var y = "string"
    return (
    	<div> Character HIT POINTS: {Char.expose().HP} 
    	Layout Goes HERE </div>
    	
     )}
}


export default Layout;
