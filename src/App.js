import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Resume from './pages/ResumePage';

class App extends Component {
	constructor() {
		super();

		this.state={
			name: "Name_",
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

  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/resume' render={(props) => <Resume state={this.state} {...props} />} />
      </div>
    );
  }
}

export default App;
