import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css';

// Class based component (State)
class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchField: ''
		}
	}

	// Life cycle hook
	// Part of React, no arrow function required
	componentDidMount() {
		// Dynamically set robots array via fetch api
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(robots => this.setState({robots: robots}));
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

		// Display loading message
		if (this.state.robots.length === 0) {
			return <div><h1>Loading</h1></div>
		} else { 
			return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					{/* Pass event handler and to SearchBox*/}
					<SearchBox searchChange={this.onSearchChange}/>
					{/* Make CardList scrollable */}
					<Scroll>
						{/* Pass filtered list of robots to CardList*/}
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;