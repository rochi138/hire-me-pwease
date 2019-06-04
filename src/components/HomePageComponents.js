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
		const amount = Math.floor(Math.random() * ( checkStates.length ));
		for (var i = 0; i < amount; i++) {
			var rand = Math.floor(Math.random() * ( checkStates.length ));
			checkStates[ rand ] = !checkStates[ rand ];
		}
		this.props.update( checkStates );
	}

	render() {
		return (
			<div className={ styles.checkboxesComponent }>
				<div style={{ lineHeight:"80px" }}>
					<FontAwesomeIcon icon={ this.state.icon } size="lg"/><h2 style={{ marginLeft: "10px" }}>{ this.state.title }</h2>
				</div>
				<div class="form-group row">
					{ this.state.source.map( ( component, i ) =>
							<div class="custom-control custom-checkbox col-3" key={ i } onClick={() => this.update( i )}>
								<input type="checkbox" class="custom-control-input" checked={ (this.state.checkStates[ i ]) ? "checked" : "" }/> 
								<label class="custom-control-label">{ component.title }</label>
							</div>
					) }
				</div>
				<div class="form-group row">
					<div class="custom-control custom-checkbox col-3" onClick={() => this.selectAll()}>
						<input type="checkbox" class="custom-control-input"/> 
						<label class="custom-control-label">All the { this.state.title }!</label>
					</div>
					<div class="custom-control custom-checkbox col-3" onClick={() => this.lucky()}>
						<input type="checkbox" class="custom-control-input"/> 
						<label class="custom-control-label">I'm feeling lucky ;)</label>
					</div>
				</div>
			</div>
		)
	}
}