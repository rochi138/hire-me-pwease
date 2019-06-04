import React, { Component } from 'react';
import styles from '../SCSS/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope,
  faPhone,
  faFireAlt,
  faHashtag
 } from '@fortawesome/free-solid-svg-icons'

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
				<h2><FontAwesomeIcon icon={ this.props.icon } size="lg" style={{ marginRight: "10px"}}/> { this.state.title }</h2>
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

export class ContactInfoSection extends Component {

	render() {
		const source = this.props.source;
		return (
			<div>
				<h1>Contact Info</h1>
				<ContactInfoComponent
					icon={ faEnvelope }
					info={ source.email }
				/>
				<ContactInfoComponent
					icon={ faPhone }
					info={ source.phone }
				/>
				<ContactInfoComponent
					icon={ faFireAlt }
					info={ source.tinder }
				/>
				<ContactInfoComponent
					icon={ faHashtag }
					info={ source.instagram }
				/>
		</div>
		)
	}
}

class ContactInfoComponent extends Component {

	render() {
		return (
			<div>
				{ this.props.info &&
					<div>
							<FontAwesomeIcon icon={ this.props.icon } size="md" style={{ marginRight: "5px"}}/>
							{ this.props.info }
					</div>
				}
		</div>
		)
	}
}