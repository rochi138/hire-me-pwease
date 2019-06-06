import React, { Component } from 'react';
import styles from '../SCSS/Resume.module.scss';
import { CheckBoxesComponent, ContactInfoSection } from '../components/ResumeComponents';
import { 
    faPuzzlePiece,
    faWrench,
    faUserTie,
    faLanguage
 } from '@fortawesome/free-solid-svg-icons';
import Pdf from 'react-to-pdf';
import Doc from './DocService';
import PdfContainer from './PdfContainer';

export default class Resume extends Component{
    createPdf = (html) => Doc.createPdf(html);

    render(){
        var source = this.props.state;
        return(
            <div className="container">
                <React.Fragment>
                    <PdfContainer createPdf={this.createPdf}>
                        <React.Fragment>
                            <div className={ styles.resume }>
                                <div style={{height: "10vw", borderBottom: "3px solid #000000"}}>
                                    <div style={{ display: "inline-block", backgroundColor: "white", paddingRight: "15px"}}>
                                        <h1>Name</h1>
                                    </div>
                                    <div>
                                        { source.name.firstName } &nbsp; { source.name.lastName }
                                    </div>
                                </div>
                                <div className={ styles.page }>
                                    <div className="col-8" style={{ borderRight: "3px solid #000000", paddingRight: "15px",	marginRight: "15px" }}>
                                        <CheckBoxesComponent 
                                            title="Hobbies"
                                            fileName="Hobbies"
                                            componentName="hobbies"
                                            icon={ faPuzzlePiece }
                                            checkStates={source.hobbies}
                                        />
                                        <CheckBoxesComponent 
                                            title="Projects"
                                            fileName="Projects"
                                            componentName="projects"
                                            icon={ faWrench }
                                            checkStates={source.projects}
                                        />
                                        <CheckBoxesComponent 
                                            title="Relevant Work"
                                            fileName="RelevantWork"
                                            componentName="relevantWork"
                                            icon={ faUserTie }
                                            checkStates={source.relevantWork}
                                        />
                                    </div>
                                    <div className={ styles.right }>
                                        <CheckBoxesComponent 
                                            title="Languages"
                                            fileName="Languages"
                                            componentName="languages"
                                            icon={ faLanguage }
                                            checkStates={source.languages}
                                        />
                                        <ContactInfoSection
                                          source = { source.contactInfo }
                                        />
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    </PdfContainer>
                </React.Fragment>
            </div>
        );
    }
}