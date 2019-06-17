import React, { Component } from 'react';
import '../SCSS/styles.css';
import { CheckBoxesComponent, ContactInfoComponent } from '../components/HomePageComponents';
import { Form } from 'reactstrap';
import { 
    faPuzzlePiece,
    faWrench,
    faUserTie,
    faLanguage
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
                                <h1>Hire Me Pwease :3c</h1>
                                <p>Help me Mr. Obama.</p>
                            </div>
                        </div>
                        <div className="container">
                            <Form>
                                <ContactInfoComponent
                                    updateName={ this.updateName } 
                                    updateContactInfo={ this.updateContactInfo } />
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
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
