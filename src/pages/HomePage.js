import React, { Component } from 'react';
import '../SCSS/styles.css';
import { FormGroup } from 'reactstrap';
import { CheckBoxesComponent } from '../components/HomePageComponents';
import { TimeOptions } from '../components/Constants';

export default class Home extends Component{
    constructor(props) {
        super(props);
        
        this.updateName = this.updateName.bind( this );
        this.updateContactInfo = this.updateContactInfo.bind( this );
        this.updateHobbies = this.updateHobbies.bind( this );
        this.updateProjects = this.updateProjects.bind( this );
        this.updateRelevantWork = this.updateRelevantWork.bind( this );
        this.updateLanguages = this.updateLanguages.bind( this );
    }

    generateResume() {
        this.props.history.push( '/resume' );
    }

    updateFields( updatedFields ) {
        this.props.moveStateUp( { ...this.props.state, ...updatedFields } );
    }

    updateName( updatedName ) {
        this.updateFields( { name: { ...this.props.state.name, ...updatedName } } );
    }

    updateContactInfo( updatedContactInfo ) {
        this.updateFields( {contactInfo: {...this.props.state.contactInfo, ...updatedContactInfo } } );
    }

    updateHobbies( updateHobbies ) {
        this.updateFields( { hobbies: updateHobbies } );
    }

    updateProjects( updatedProjects ) {
        this.updateFields( { projects: updatedProjects } );
    }

    updateRelevantWork( updatedRelevantWork ) {
        this.updateFields( { relevantWork: updatedRelevantWork } );
    }

    updateLanguages( updatedLanguages ) {
        this.updateFields( { languages: updatedLanguages } );
    }

    generatePerson() {
        var source = require('../components/JSONs/ContactInfo.json');
        var newState = {
            name: {
                firstName: source.firstName[ this.randomNum( source.firstName.length ) ],
                lastName: source.lastName[ this.randomNum( source.lastName.length ) ]
            },
            contactInfo: {
                email: source.email.username[ this.randomNum( source.email.username.length ) ] + "@" + source.email.domain[ this.randomNum( source.email.domain.length ) ] + ".ca",
                phone: source.phone[ this.randomNum( source.phone.length ) ],
                tinder: source.tinder[ this.randomNum( source.tinder.length ) ],
                instagram: source.instagram[ this.randomNum( source.instagram.length ) ],
            }
        }
        document.getElementById("firstName").value = newState.name.firstName;
        document.getElementById("lastName").value = newState.name.lastName;
        document.getElementById("email").value = newState.contactInfo.email;
        document.getElementById("phone").value = newState.contactInfo.phone;
        document.getElementById("tinder").value = newState.contactInfo.tinder;
        document.getElementById("instagram").value = newState.contactInfo.instagram;
        this.updateFields( newState );
    }

    randomNum( max ) {
        return Math.floor( Math.random() * ( max ));
    }

    render(){
        return(
            <div>
                <div className="container">
                    { this.props.state.theme === "default" 
                        ? <div className="theme-dark">
                            <div className="app-container">
                                <button className="button" onClick={ () => this.updateFields({ theme: "dark" })}>Dark Mode</button></div></div>
                        : <div className="theme-default"><div className="app-container"><button className="button" onClick={ () => this.updateFields({ theme: "default" })}>Default</button></div></div>
                    }
                </div>
                <div className={ "app-defaults theme-" + this.props.state.theme }>
                    <div class="background" />
                    <div className="app-container">
                        <div className="container">
                            <div className="heading" style={{ paddingRight: "15px", zIndex: "1" }}>
                                <h1>Hire Me Pwease :3c</h1><br />
                                <h2>The Internet's Only Terrible Resume Generator</h2>
                                <p>Help me Mr. Obama.</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="heading">
                                <h2>Personal Information</h2>
                                <button className="btn btn-primary" style={{ marginLeft: '15px' }} onClick={ ()=> this.generatePerson() }>Who am I?</button>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input id="firstName" className="form-control" placeholder="Chad, Stacy, Elon, Obama" onChange={(e) => this.updateName({firstName: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label >Last Name</label>
                                        <input id="lastName" className="form-control" placeholder="Smith, Musk, Gates, Jobs, etc." onChange={(e) => this.updateName({lastName: e.target.value })}/>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-information">
                                <div className="row">
                                    <div className="col">
                                        <i className="fas fa-envelope" />
                                        <label>Email Address</label>
                                        <input id="email" className="form-control" placeholder="president@uwaterloo.ca" onChange={(e) => this.updateContactInfo({email: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-phone" />
                                        <label>Phone Number</label>
                                        <input id="phone" className="form-control" placeholder="666-420-6969" onChange={(e) => this.updateContactInfo({phone: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-fire-alt" style={{ transform: "scaleX(-1"}}/>
                                        <label>Tinder Profile</label>
                                        <input id="tinder" className="form-control" placeholder="lookin4truluv" onChange={(e) => this.updateContactInfo({tinder: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <i className="fas fa-hashtag" />
                                        <label>Instagram</label>
                                        <input id="instagram" className="form-control" placeholder="@BarackObama" onChange={(e) => this.updateContactInfo({instagram: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <CheckBoxesComponent 
                                title="Languages"
                                fileName="Languages"
                                componentName="languages"
                                icon="fas fa-language"
                                update={ this.updateLanguages } />
                            <CheckBoxesComponent 
                                title="Projects"
                                fileName="Projects"
                                componentName="projects"
                                icon="fas fa-wrench"
                                update={ this.updateProjects } />
                            <CheckBoxesComponent 
                                title="Relevant Work"
                                fileName="RelevantWork"
                                componentName="relevantWork"
                                icon="fas fa-user-tie"
                                update={ this.updateRelevantWork } />
                            <CheckBoxesComponent 
                                title="Hobbies"
                                fileName="Hobbies"
                                componentName="hobbies"
                                icon="fas fa-puzzle-piece"
                                update={ this.updateHobbies } />
                            <FormGroup tag="fieldset">
                                <div class="heading" ><h2>Support</h2></div>
                                <label>Time is money. Please donate to the developers of this site.</label>
                                { TimeOptions.map( ( option ) =>
                                    <FormGroup check onClick={ ()=> this.updateFields({ time: option.time })}>
                                        <label check>
                                            <input type="radio" name="radio1" />{' '}
                                            <div style={{ display: "inline-block" }} dangerouslySetInnerHTML={ { __html: option.label } } />
                                        </label>
                                    </FormGroup>
                                ) }
                            </FormGroup>
                            <div className="form-group row" style={{ marginTop: "10px", textAlign: "center" }}>
                                <button className="btn btn-primary" onClick={ () => this.generateResume() }>Hit Me With Your Best Shot</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
