import React, { Component } from 'react';
import '../SCSS/HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Row } from 'reactstrap';

import { 
  faEnvelope,
  faPhone,
  faFireAlt,
	faHashtag,
	faAddressCard,
	faChessKing
} from '@fortawesome/free-solid-svg-icons';

library.add( 
	faChessKing 
);

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

		var source = require('./JSONs/' + this.props.fileName + '.json')[this.props.componentName];

		this.state={
			source: source,
			checkStates: this.props.checkStates,
			title: this.props.title,
		}
	}

	render() {
		const source = this.state.source;
		return (
			<div class="checkboxesComponent" style={{borderBottom: "3px solid #000000", margin: getOffsetMargins(10) }}>
				<div class="heading" >
					<FontAwesomeIcon icon={ this.props.icon } size="3x" style={{ marginRight: "10px"}}/><h2> { this.state.title }</h2>
				</div>
				{ this.state.checkStates.map( ( checkState, i ) =>
					<div key = { i }>
						{ checkState &&
							<div>
								{ source[i].title || source[i].icon
										? <div>
												<div style={{ fontSize: "1em", fontWeight: "bold" }}>
														<FontAwesomeIcon icon={ source[i].icon } size={ source[i].title ? "2x" : "4x" }/>
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
				<div class="heading" >
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

export class LoadingScreenComponent extends Component {
	constructor(props){
		super(props);

		this.state={
			conversation: require('./JSONs/Conversation.json').conversation,
			counter: 0,			
			time: this.props.time
		}

		this.tick = this.tick.bind(this);

		this.startCountDown()
	}

	tick() {
		var min = Math.floor(this.state.time / 60);
		var sec = this.state.time - (min * 60);
		this.setState({ 
			minutes: min < 10 ? "0" + min : min , 
			seconds: sec < 10 ? "0" + sec : sec 
		})
		if (min === 0 & sec === 0)
			this.props.moveStateUp({ time: 0 });
		this.setState({ time: this.state.time - 1 });
	}
	
	startCountDown() {
		this.intervalHandle = setInterval(this.tick, 1000);
	}

	convoClick() {
		if ( this.state.counter === this.state.conversation.length - 1 )
			this.props.moveStateUp({ time: 0 });
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		return(
			<div style={{ position: "relative" }}>
				<div className="videoWrapper" >
					<div class="overVideo">
						<h1>And now a word from our sponsors</h1>
						<div class="clock" style={{ textAlign: "center" }}>{ this.state.minutes }:{ this.state.seconds }</div>
						<Row>
							<div class="col-6">
								<button class="obama" onClick={ ()=> this.convoClick() } style={ this.state.conversation[this.state.counter].obama ? {} : { display: "none" }} >
									{ this.state.conversation[this.state.counter].content 
										? this.state.conversation[this.state.counter].content 
										: <img class="meme" src={ require( '../images/Obama' + this.state.conversation[this.state.counter].counter + '.PNG' ) } alt="Obama Eyes"/>
									}
								</button>
							</div>
							<div class="col-6">
								<button class="hewwo" onClick={ ()=> this.convoClick() } style={ !this.state.conversation[this.state.counter].obama ? {} : { display: "none" }} >
									{ this.state.conversation[this.state.counter].content }
								</button>
							</div>
						</Row>
					</div>
					<iframe className="video"
						src={`https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1`}
						frameBorder="0"
						allow="autoplay"
						title="Fake Loading Screen" />
				</div>
			</div>
		)
	}
}