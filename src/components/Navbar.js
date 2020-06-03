import React from 'react';
import {Link} from 'react-router-dom';
import {List,Header} from 'semantic-ui-react';

export default class Navbar extends React.Component {

	render() {
		let style = {
			height:70,
			backgroundColor:"lightblue"
		}
	
	return (
		<div style={style}>
			<List>
				<List.Item><Link to="/">Pelilista</Link></List.Item>
				<List.Item><Link to="/user">Luo tunnus</Link></List.Item>
				<List.Item><Link to="/admin">Admin</Link></List.Item>
			</List>
		</div>
	)
	}
}