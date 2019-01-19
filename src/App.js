import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Resume from './pages/ResumePage';

class App extends Component {
	constructor(props) {
		super();

		this.state={
			name: {
				firstName: "",
				lastname: "",
			},
			hobbies: [
				{
					title: "Htitle1",
					description: "Hdescription1",
				},
				{
					title: "Htitle2",
					description: "Hdescription2",
				}
			],
			projects: [
				{
					title: "Ptitle1",
					description: "Pdescription1",
				},
				{
					title: "Ptitle2",
					description: "Pdescription2",
				}
			],
			relevantWork: [
				{
					title: "Rtitle1",
					description: "Rdescription1",
				},
				{
					title: "Rtitle2",
					description: "Rdescription2",
				}
			],
			languages: [
				"LTitle1",
				"LTitle2"
			],
			contactInfo: {
				phone: "420-666-6969",
				caption: "Tinder me up_",
			}
		}

		this.moveStateUp = this.moveStateUp.bind( this );
	}

	moveStateUp( updatedObj ) {
		this.setState( { ...updatedObj } );
	}

  render() {
    return (
      <div>
        <Route exact path='/' render={(props) => <Home moveStateUp={ this.moveStateUp } state={this.state} {...props} />} />
        <Route path='/resume' render={(props) => <Resume state={this.state} {...props} />} />
      </div>
    );
  }
}

export default App;
