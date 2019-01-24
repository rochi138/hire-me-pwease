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
			allTheText: this.props.allTheText,
			title: this.props.title,
		}
	}

	update( key ) {
    var checkStates = this.state.checkStates;
    checkStates[key] = !checkStates[key];
    this.props.update( checkStates );
  }

	render() {
		return (
			<div className={ styles.checkboxesComponent }>
				<h2>{ this.state.title }</h2>
				{ this.state.source.map( ( component, i ) =>
            <div class="form-check form-check-inline" key={ i }>
                <input class="form-check-input" type="checkbox" onClick={() => this.update( i )}/>
                <label class="form-check-label">{component.title}</label>
            </div>
        ) }
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="checkboxHobbyLucky" value="Lucky" />
            <label class="form-check-label" for="checkboxHobbyLucky">{ this.state.allTheText }</label>
        </div>
			</div>
		)
	}
}