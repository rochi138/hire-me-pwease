import React, { Component } from 'react';
import styles from '../SCSS/HomePage.module.scss';

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
		console.log(amount);
		for (var i = 0; i < amount; i++) {
			var rand = Math.floor(Math.random() * ( checkStates.length ));
			console.log(rand);
			checkStates[ rand ] = !checkStates[ rand ];
		}
		this.props.update( checkStates );
	}

	render() {
		return (
			<div className={ styles.checkboxesComponent }>
				<h2>{ this.state.title }</h2>
				<div class="form-group row">
					{ this.state.source.map( ( component, i ) =>
							<div class="custom-control custom-checkbox col-4" key={ i } onClick={() => this.update( i )}>
								<input type="checkbox" class="custom-control-input" checked={ (this.state.checkStates[ i ]) ? "checked" : "" }/> 
								<label class="custom-control-label">{ component.title }</label>
							</div>
					) }
				</div>
				<div class="form-group row">
					<div class="custom-control custom-checkbox col-4" onClick={() => this.selectAll()}>
						<input type="checkbox" class="custom-control-input"/> 
						<label class="custom-control-label">All the { this.state.title }!</label>
					</div>
					<div class="custom-control custom-checkbox col-4" onClick={() => this.lucky()}>
						<input type="checkbox" class="custom-control-input"/> 
						<label class="custom-control-label">I'm feeling lucky ;)</label>
					</div>
				</div>
			</div>
		)
	}
}