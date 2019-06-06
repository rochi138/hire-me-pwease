import React, { Component } from 'react';
import styles from '../SCSS/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope,
  faPhone,
  faFireAlt,
	faHashtag,
	faAddressCard
 } from '@fortawesome/free-solid-svg-icons'

function getOffsetMargins ( multiplier ) {
	return (
		Math.abs( getOffsetNum( multiplier / 2 ) ) + "px " + 
		getOffsetNum( multiplier ) + "px " + 
		Math.abs( getOffsetNum( multiplier / 2 ) ) + "px " + 
		getOffsetNum( multiplier ) + "px"
	);
}

function getOffsetNum ( multiplier ) {
	return multiplier * ( Math.floor(Math.random() * ( 4 ) ) -2 );
}

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
			<div className={ styles.checkboxesComponent } style={{borderBottom: "3px solid #000000", margin: getOffsetMargins(10) }}>
				<div style={{ display: "inline-block", backgroundColor: "white", paddingRight: "15px"}}>
					<h2><FontAwesomeIcon icon={ this.props.icon } size="lg" style={{ marginRight: "10px"}}/> { this.state.title }</h2>
				</div>
				{ this.state.checkStates.map( ( checkState, i ) =>
            <div key = { i }>
            { checkState &&
            	<div>
								{ source[i].title 
										? <div>
												<div style={{ margin: getOffsetMargins(8) }}>
													{ source[i].title }
												</div>
												<div style={{ margin: getOffsetMargins(8) }}>
													{ source[i].description }
												</div>
											</div>
										: <div style={{ margin: getOffsetMargins(4) }}>{ source[i] }</div>
								}
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
				<div style={{ display: "inline-block", backgroundColor: "white", paddingRight: "15px"}}>
					<FontAwesomeIcon icon={ faAddressCard } style={{ marginRight: "10px"}}/>
					<h2>Contact Info</h2>
				</div>
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
					<div style={{ margin: getOffsetMargins(4) }}>
							<FontAwesomeIcon icon={ this.props.icon } style={{ marginRight: (getOffsetNum( 3 ) + "px") }}/>
							{ this.props.info }
					</div>
				}
		</div>
		)
	}
}