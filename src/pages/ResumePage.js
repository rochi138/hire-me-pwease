import React, { Component } from 'react';
import styles from '../SCSS/Resume.module.scss';
import { CheckBoxesComponent, ContactInfoSection } from '../components/ResumeComponents';
import { 
    faPuzzlePiece,
    faWrench,
    faUserTie,
    faLanguage
 } from '@fortawesome/free-solid-svg-icons';
import Doc from './DocService';
import PdfContainer from './PdfContainer';

function getTransform () {
    return (
        "rotate(" + 15 * ( 1 + ( Math.floor( Math.random() * ( 22 ) ) ) ) + "deg) " +
        "skewY(" + 5 * ( 1 + ( Math.floor( Math.random() * ( 6 ) ) ) ) + "deg) " +
        "scaleY(" + 0.5 * ( 1 + ( Math.floor( Math.random() * ( 3 ) ) ) ) + ")"
    );
}

function getPosition () {
    return 5 * ( 1 + ( Math.floor( Math.random() * ( 15 ) ) ) ) + "%";
}

export default class Resume extends Component{
    createPdf = (html) => Doc.createPdf(html);

    render(){
        var source = this.props.state;
        return(
            <div className="container">
                <React.Fragment>
                    <PdfContainer createPdf={this.createPdf}>
                        <React.Fragment>
                            <div style={{ position: "relative" }}>
                                <div className={ styles.name } style={{ transform: getTransform(), left: getPosition(), top: getPosition() }}>
                                    &nbsp; &nbsp; &nbsp; { source.name.lastName } <br /> { source.name.firstName }
                                </div>
                                <div className={ styles.resume }>
                                    <div style={{height: "10vw", borderBottom: "3px solid #000000", zIndex: "2"}}>
                                        <div style={{ display: "inline-block", backgroundColor: "white", paddingRight: "15px"}}>
                                            <h1>Name</h1>
                                        </div>
                                        <div style={{ display: "inline-block", backgroundColor: "white"}}>
                                            { source.name.lastName || source.name.firstName
                                                ? <div>So like the name's on here somewhere... probably</div>
                                                : <div> A rose by any other name would smell as sweet (John 12:16) </div>
                                            }
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
                            </div>
                        </React.Fragment>
                    </PdfContainer>
                </React.Fragment>
            </div>
        );
    }
}