import React, { Component } from 'react';
import '../SCSS/styles.css';
import { CheckBoxesComponent } from '../components/HomePageComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPuzzlePiece,
    faWrench,
    faUserTie,
    faLanguage,
    faEnvelope,
    faPhone,
    faFireAlt,
    faHashtag
 } from '@fortawesome/free-solid-svg-icons'

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
        var state = {
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
        document.getElementById("firstName").value = state.name.firstName;
        document.getElementById("lastName").value = state.name.lastName;
        document.getElementById("email").value = state.contactInfo.email;
        document.getElementById("phone").value = state.contactInfo.phone;
        document.getElementById("tinder").value = state.contactInfo.tinder;
        document.getElementById("instagram").value = state.contactInfo.instagram;
        this.updateFields( state );
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
                                        <FontAwesomeIcon icon={ faEnvelope } style={{ marginRight: "5px"}}/>
                                        <label>Email Address</label>
                                        <input id="email" className="form-control" placeholder="president@uwaterloo.ca" onChange={(e) => this.updateContactInfo({email: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <FontAwesomeIcon icon={ faPhone } style={{ marginRight: "5px"}}/>
                                        <label>Phone Number</label>
                                        <input id="phone" className="form-control" placeholder="666-420-6969" onChange={(e) => this.updateContactInfo({phone: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <FontAwesomeIcon icon={ faFireAlt } style={{ marginRight: "5px"}}/>
                                        <label>Tinder Profile</label>
                                        <input id="tinder" className="form-control" placeholder="lookin4truluv" onChange={(e) => this.updateContactInfo({tinder: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <FontAwesomeIcon icon={ faHashtag } style={{ marginRight: "5px"}}/>
                                        <label>Instagram</label>
                                        <input id="instagram" className="form-control" placeholder="@BarackObama" onChange={(e) => this.updateContactInfo({instagram: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <CheckBoxesComponent 
                                title="Languages"
                                fileName="Languages"
                                componentName="languages"
                                icon={ faLanguage }
                                update={ this.updateLanguages } />
                            <CheckBoxesComponent 
                                title="Projects"
                                fileName="Projects"
                                componentName="projects"
                                icon={ faWrench }
                                update={ this.updateProjects } />
                            <CheckBoxesComponent 
                                title="Relevant Work"
                                fileName="RelevantWork"
                                componentName="relevantWork"
                                icon={ faUserTie }
                                update={ this.updateRelevantWork } />
                            <CheckBoxesComponent 
                                title="Hobbies"
                                fileName="Hobbies"
                                componentName="hobbies"
                                icon={ faPuzzlePiece }
                                update={ this.updateHobbies } />
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
