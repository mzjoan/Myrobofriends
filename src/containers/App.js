import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robot: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(reponse=> reponse.json())
		.then(users => {this.setState({robot: users})});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		}

	render (){
		const { robot, searchfield } = this.state;
		const filteredRobot = robot.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
		return !robot.length ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>MyRobotFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<ErrorBoundry>
						<CardList robot={filteredRobot}/>
					</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
 
export default App;