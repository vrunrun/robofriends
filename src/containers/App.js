import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
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
		const { robots, searchField } = this.state;
		// Filter robots array with search string
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		// Display loading message
		// Ternary operator
		return !robots.length? <div><h1>Loading</h1></div>: (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				{/* Pass event handler and to SearchBox*/}
				<SearchBox searchChange={this.onSearchChange}/>
				{/* Make CardList scrollable */}
				<Scroll>
					<ErrorBoundary>
						{/* Pass filtered list of robots to CardList*/}
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;