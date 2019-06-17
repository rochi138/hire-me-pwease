import React, { Component } from 'react';
import '../SCSS/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

//To put icons in checkboxes:

// 1. import from
import { 
	faChessKing,
	faPuzzlePiece,
	faEnvelope,
	faPhone,
	faFireAlt,
	faHashtag
} from '@fortawesome/free-solid-svg-icons';

// 2. add to library
library.add( 
	faChessKing,
	faPuzzlePiece
);

// 3. add as "icon" to Hobbies.json; check library name from fontawesome website
// 4. repeat step 1 and 2 in ResumeComponents.js

export class ContactInfoComponent extends Component {
	constructor( props ){
		super( props );

		this.state={
			source: require('./JSONs/ContactInfo.json')
		}
	}

	render(){
		return(
			<div>
				<div className="heading">
					<h2>Personal Information</h2>
				</div>
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label>First Name</label>
							<input className="form-control" placeholder="Chad, Stacey, Elon, Obama" onChange={(e) => this.props.updateName({firstName: e.target.value })} />
						</div>
					</div>
					<div className="col">
						<div className="form-group">
							<label >Last Name</label>
							<input className="form-control" placeholder="Smith, Musk, Gates, Jobs, etc." onChange={(e) => this.props.updateName({lastName: e.target.value })}/>
						</div>
					</div>
				</div>
				<div className="contact-information">
					<div className="row">
						<div className="col">
							<FontAwesomeIcon icon={ faEnvelope } style={{ marginRight: "5px"}}/>
							<label>Email Address</label>
							<input className="form-control" placeholder="president@uwaterloo.ca" onChange={(e) => this.props.updateContactInfo({email: e.target.value })} />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={ faPhone } style={{ marginRight: "5px"}}/>
							<label>Phone Number</label>
							<input className="form-control" placeholder="666-420-6969" onChange={(e) => this.props.updateContactInfo({phone: e.target.value })} />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={ faFireAlt } style={{ marginRight: "5px"}}/>
							<label>Tinder Profile</label>
							<input className="form-control" placeholder="looking4truluv" onChange={(e) => this.props.updateContactInfo({tinder: e.target.value })} />
						</div>
						<div className="col">
							<FontAwesomeIcon icon={ faHashtag } style={{ marginRight: "5px"}}/>
							<label>Instagram</label>
							<input className="form-control" placeholder="@BarackObama" onChange={(e) => this.props.updateContactInfo({instagram: e.target.value })} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export class CheckBoxesComponent extends Component {
	constructor(props){
		super(props);

		var source = require('./JSONs/' + this.props.fileName + '.json')[this.props.componentName];

		var checkStates = [];
        source.forEach(function(element) {
          checkStates.push( false );
    });

		this.state={
			source: source,
			checkStates: checkStates,
			title: this.props.title,
			icon: this.props.icon
		}
	}

	update( key ) {
    var checkStates = this.state.checkStates;
    checkStates[key] = !checkStates[key];
    this.props.update( checkStates );
	}
	
	selectAll() {
		var checkStates = this.state.checkStates;
		for (var i = 0; i < checkStates.length; i++) { 
			checkStates[i] = true;
		}
		this.props.update( checkStates );
	}

	lucky() {
		var checkStates = this.state.checkStates;
		const amount = 1 + Math.floor(Math.random() * ( checkStates.length -1 ));
		for (var i = 0; i < amount; i++) {
			var rand = Math.floor(Math.random() * ( checkStates.length ));
			checkStates[ rand ] = !checkStates[ rand ];
		}
		this.props.update( checkStates );
	}

	render() {
		return (
			<div className="checkboxesComponent" >
				<div className="heading">
					{ this.state.icon && <FontAwesomeIcon icon={ this.state.icon } size="4x"/> }
					<h2 style={{ marginLeft: "10px" }}>{ this.state.title }</h2>
				</div>
				<div className="form-group row">
					{ this.state.source.map( ( component, i ) =>
							<div className="custom-control custom-checkbox col-3" key={ i } onClick={() => this.update( i )}>
								<input type="checkbox" className="custom-control-input" checked={ (this.state.checkStates[ i ]) ? "checked" : "" } onChange={ ()=> {} }/>
								{ component.title || component.icon
									? <label className="custom-control-label">
											{ component.icon && <FontAwesomeIcon icon={ component.icon } size={ component.title ? "2x" : "3x" }/> }
											{ component.title }
										</label> 
									: <label className="custom-control-label">{ component }</label>
								}
							</div>
					) }
				</div>
				<div className="form-group row">
					<div className="custom-control custom-checkbox col-3" onClick={() => this.selectAll()}>
						<input type="checkbox" className="custom-control-input"/> 
						<label className="custom-control-label">All the { this.state.title }!</label>
					</div>
					<div className="custom-control custom-checkbox col-3" onClick={() => this.lucky()}>
						<input type="checkbox" className="custom-control-input"/> 
						<label className="custom-control-label">I'm feeling lucky ;)</label>
					</div>
				</div>
			</div>
		)
	}
}