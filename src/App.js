import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import Resume from './pages/ResumePage';

class App extends Component {
	constructor(props) {
		super();

		this.state={
			objectUnderEdit: {
				test: "",
				name: {
					firstName: "",
					lastname: "",
				},
				hobbies: [
					{
						title: "Htitle",
						description: "Hdescription",
					}
				],
				projects: [
					{
						title: "Ptitle",
						description: "Pdescription",
					}
				],
				relevantWork: [
					{
						title: "Rtitle",
						description: "Rdescription",
					}
				],
				languages: [
					{
						title: "Ltitle",
						description: "Ldescription",
					}
				],
				contactInfo: {
					phone: "420-666-6969",
					caption: "Tinder me up_",
				}
			}
		}

		this.moveStateUp = this.moveStateUp.bind( this );
	}

	moveStateUp( updatedObj ) {
		this.setState( { objectUnderEdit: updatedObj } );
	}

  render() {
  	console.log(this.state);
    return (
      <div>
        <Route exact path='/' render={(props) => <Home moveStateUp={ this.moveStateUp } state={this.state} {...props} />} />
        <Route path='/resume' render={(props) => <Resume state={this.state} {...props} />} />
      </div>
    );
  }
}

export default App;
