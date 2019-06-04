import React, { Component } from 'react';
import styles from '../SCSS/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class CheckBoxesComponent extends Component {
	constructor(props){
		super(props);

		var source = require('./' + this.props.fileName + '.json')[this.props.componentName];

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
			<div className={ styles.checkboxesComponent }>
				<div style={{ lineHeight:"80px", display: "inline-block", backgroundColor: "white"}}>
					<FontAwesomeIcon icon={ this.state.icon } size="lg"/><h2 style={{ marginLeft: "10px" }}>{ this.state.title }</h2>
				</div>
				<div className="form-group row">
					{ this.state.source.map( ( component, i ) =>
							<div className="custom-control custom-checkbox col-3" key={ i } onClick={() => this.update( i )}>
								<input type="checkbox" className="custom-control-input" checked={ (this.state.checkStates[ i ]) ? "checked" : "" }/>
								{ component.title 
									? <label className="custom-control-label">{ component.title }</label> 
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