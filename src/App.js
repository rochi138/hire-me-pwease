import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './SCSS/App.scss';
import Home from './pages/HomePage';
import Resume from './pages/ResumePage';

class App extends Component {
	constructor(props) {
		super();

		this.state={
			theme: "default",
			name: {
				firstName: "",
				lastname: "",
			},
			hobbies: [],
			projects: [],
			relevantWork: [],
			languages: [],
			contactInfo: {
				phone: "",
				email: "",
				tinder: "",
				instagram: ""
			},
			time: 15
		}

		this.moveStateUp = this.moveStateUp.bind( this );
	}

	moveStateUp( updatedObj ) {
		this.setState( { ...this.state, ...updatedObj } );
	}

  render() {
    return (
		<div>
			<Route exact path='/' render={(props) => <Home moveStateUp={ this.moveStateUp } state={this.state} {...props} />} />
			<Route path='/resume' render={(props) => <Resume moveStateUp={ this.moveStateUp } state={this.state} {...props} />} />
		</div>	
    );
  }
}

export default App;
