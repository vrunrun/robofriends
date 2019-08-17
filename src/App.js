import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';	// non-default export, destructuring required
import SearchBox from './SearchBox';

// Class based component (State)
class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	// Event handler
	onSearchChange = event => {
		// Set search string as we type
		this.setState ({searchField: event.target.value});		
		// console.log(filteredRobots);
	}

	// Class based component must have a render method
	render(){
		// Filter robots array with search string
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				{/* Pass event handler and to SearchBox*/}
				<SearchBox searchChange={this.onSearchChange}/>
				{/* Pass filtered list of robots to CardList*/}
				<CardList robots={filteredRobots}/>			
			</div>
		);
	}
}

export default App;