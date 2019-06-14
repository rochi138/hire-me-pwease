import React, { Component } from 'react';
import '../SCSS/styles.css';
import { CheckBoxesComponent } from '../components/HomePageComponents';
import { Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPuzzlePiece,
    faWrench,
    faUserTie,
    faEnvelope,
    faPhone,
    faFireAlt,
    faHashtag,
    faLanguage
 } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component{
    constructor(props) {
        super(props);

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

    render(){
        return(
            <div>
                <div class="container">
                    { this.props.state.theme == "default" 
                        ? <div class="theme-dark"><div class="app-container"><div class="button" onClick={ () => this.updateFields({ theme: "dark" })}>Dark Mode</div></div></div>
                        : <div class="theme-default"><div class="app-container"><div class="button" onClick={ () => this.updateFields({ theme: "default" })}>Default</div></div></div>
                    }
                </div>
                <div class={ "app-defaults theme-" + this.props.state.theme }>
                    <div class="app-container">
                        <div class="container">
                            <div style={{ display: "inline-block", backgroundColor: "white", paddingRight: "15px"}}>
                                <h1>Hire Me Pwease :3c</h1>
                                <p>Help me Mr. Obama.</p>
                            </div>
                        </div>
                        <div class="container">
                            <Form>
                                <div style={{ display: "inline-block", backgroundColor: "white"}}>
                                    <h2>Personal Information</h2>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input class="form-control" placeholder="Chad, Stacey, Elon, Obama" onChange={(e) => this.updateName({firstName: e.target.value })} />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label >Last Name</label>
                                            <input class="form-control" placeholder="Smith, Musk, Gates, Jobs, etc." onChange={(e) => this.updateName({lastName: e.target.value })}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact-information">
                                    <div class="row">
                                        <div class="col">
                                            <FontAwesomeIcon icon={ faEnvelope } style={{ marginRight: "5px"}}/>
                                            <label>Email Address</label>
                                            <input class="form-control" placeholder="president@uwaterloo.ca" onChange={(e) => this.updateContactInfo({email: e.target.value })} />
                                        </div>
                                        <div class="col">
                                            <FontAwesomeIcon icon={ faPhone } style={{ marginRight: "5px"}}/>
                                            <label>Phone Number</label>
                                            <input class="form-control" placeholder="666-420-6969" onChange={(e) => this.updateContactInfo({phone: e.target.value })} />
                                        </div>
                                        <div class="col">
                                            <FontAwesomeIcon icon={ faFireAlt } style={{ marginRight: "5px"}}/>
                                            <label>Tinder Profile</label>
                                            <input class="form-control" placeholder="looking4truluv" onChange={(e) => this.updateContactInfo({tinder: e.target.value })} />
                                        </div>
                                        <div class="col">
                                            <FontAwesomeIcon icon={ faHashtag } style={{ marginRight: "5px"}}/>
                                            <label>Instagram</label>
                                            <input class="form-control" placeholder="@BarackObama" onChange={(e) => this.updateContactInfo({instagram: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <CheckBoxesComponent 
                                    title="Languages"
                                    fileName="Languages"
                                    componentName="languages"
                                    icon={ faLanguage }
                                    update={ this.updateLanguages }
                                />
                                <CheckBoxesComponent 
                                    title="Projects"
                                    fileName="Projects"
                                    componentName="projects"
                                    icon={ faWrench }
                                    update={ this.updateProjects }
                                />
                                <CheckBoxesComponent 
                                    title="Relevant Work"
                                    fileName="RelevantWork"
                                    componentName="relevantWork"
                                    icon={ faUserTie }
                                    update={ this.updateRelevantWork }
                                />
                                <CheckBoxesComponent 
                                    title="Hobbies"
                                    fileName="Hobbies"
                                    componentName="hobbies"
                                    icon={ faPuzzlePiece }
                                    update={ this.updateHobbies }
                                />
                                <div class="form-group row" style={{ marginTop: "10px", textAlign: "center" }}>
                                    <button class="btn btn-primary" onClick={ () => this.generateResume() }>Hit Me With Your Best Shot</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
