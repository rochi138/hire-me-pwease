import React, { Component } from 'react';
import styles from '../SCSS/HomePage.module.scss';

export class CheckBoxesComponent extends Component {
	constructor(props){
		super(props);

		var source = require('./' + this.props.fileName + '.json')[this.props.componentName];

		this.state={
			source: source,
			checkStates: this.props.checkStates,
			title: this.props.title,
		}
	}

	render() {
		const source = this.state.source;
		return (
			<div className={ styles.checkboxesComponent } style={{borderBottom: "3px solid #000000"}}>
				<h2>{ this.state.title }</h2>
				{ this.state.checkStates.map( ( checkState, i ) =>
            <div key = { i }>
            { checkState &&
            	<div>
                <div>
                  { source[i].title }
                </div>
                <div>
                  { source[i].description }
                </div>
              </div>
            }
            </div>
        ) }
			</div>
		)
	}
}