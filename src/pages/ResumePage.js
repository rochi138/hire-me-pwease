// For downloading, straight jspdf and jspdf + html2canvas did not seem to work

import React, { Component } from 'react';
import '../SCSS/Resume.module.scss';
import { CheckBoxesComponent, ContactInfoSection, LoadingScreenComponent } from '../components/ResumeComponents';
import Doc from '../components/pdf service/DocService';
import PdfContainer from '../components/pdf service/PdfContainer';
import { ModesList } from '../components/Constants';

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
            <div>
                <div class={ "app-defaults theme-" + this.props.state.theme }>
                    <div class="background" />
                    <div class="app-container">
                        { this.props.state.time 
                            ?   <LoadingScreenComponent 
                                    time={ this.props.state.time }
                                    moveStateUp={ this.props.moveStateUp } /> 
                            :   <div class="container">
                                <React.Fragment>
                                    <PdfContainer createPdf={this.createPdf}>
                                        <React.Fragment>
                                            <div style={{ position: "relative" }}>
                                                <div class="resumeBackground" />
                                                <div class="name" style={{ transform: getTransform(), left: getPosition(), top: getPosition() }}>
                                                    &nbsp; &nbsp; &nbsp; { source.name.lastName } <br /> { source.name.firstName }
                                                </div>
                                                <div class="resume" >
                                                    <div style={{height: "10vw", borderBottom: "3px solid #000000", zIndex: "1"}}>
                                                        <div class="heading">
                                                            <h1>Name</h1>
                                                        </div>
                                                        <label style={{ display: "inline-block"}}>
                                                            { source.name.lastName || source.name.firstName
                                                                ? <div>So like the name's on here somewhere... probably</div>
                                                                : <div> A rose by any other name would smell as sweet (John 12:16) </div>
                                                            }
                                                        </label>
                                                    </div>
                                                    <div class="page" >
                                                        <div class="col-8" style={{ borderRight: "3px solid #000000", paddingRight: "15px",	marginRight: "15px" }}>
                                                            <CheckBoxesComponent 
                                                                title="Hobbies"
                                                                fileName="Hobbies"
                                                                componentName="hobbies"
                                                                icon="fas fa-puzzle-piece"
                                                                checkStates={source.hobbies}
                                                            />
                                                            <CheckBoxesComponent 
                                                                title="Projects"
                                                                fileName="Projects"
                                                                componentName="projects"
                                                                icon="fas fa-wrench"
                                                                checkStates={source.projects}
                                                            />
                                                            <CheckBoxesComponent 
                                                                title="Relevant Work"
                                                                fileName="RelevantWork"
                                                                componentName="relevantWork"
                                                                icon="fas fa-wrench"
                                                                checkStates={source.relevantWork}
                                                            />
                                                        </div>
                                                        <div class="right" >
                                                            <CheckBoxesComponent 
                                                                title="Languages"
                                                                fileName="Languages"
                                                                componentName="languages"
                                                                icon="fas fa-language"
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
                        }
                        
                    </div>
                </div>
                {/* <div>
                    { ModesList.map( ( mode ) =>
                            <div class={ "theme-" + mode } style={{ display: "inline-block"}}>
                                <div class="app-container container" ><button class="button" onClick={ () => this.props.moveStateUp( { theme: mode } ) }>{ mode }</button></div>
                            </div>
                    ) }	
                </div> */}
            </div>
        );
    }
}