// For whatever reason, download button does not work BELOW the resume??
// Resizing window affects pdf
// Lost font-awesome
// Honestly just saving the webpage as a pdf from the browser works better

import React, { Component } from 'react';
import styles from '../SCSS/Resume.module.scss';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { CheckBoxesComponent, ContactInfoSection } from '../components/ResumeComponents';
import { 
  faPuzzlePiece,
  faWrench,
  faUserTie,
  faLanguage
 } from '@fortawesome/free-solid-svg-icons';
 import Pdf from 'react-to-pdf';

export default class Resume extends Component{
  generatePDF() {
    const input = document.getElementById('resume');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("my_uwu_wesume.pdf");  
      });
    ;
  }

  render(){
    const ref = React.createRef();
    var source = this.props.state;
    return(
      <div>
        <div className="container">
          <Pdf targetRef={ref} filename="my_uwu_wesume.pdf">
            {({ toPdf }) => <button onClick={toPdf}>¯\_(ツ)_/¯</button>}
          </Pdf>
        </div>
        <div ref={ref} id="resume" className={ styles.resume }>
            <div id="Name" style={{height: "10vw", borderBottom: "3px solid #000000"}}>
                <div style={{ display: "inline-block", backgroundColor: "white", paddingRight: "15px"}}>
                    <h1>Name</h1>
                </div>
                <div>
                    { source.name.firstName }
                    { source.name.lastName }
                </div>
            </div>
            <div id="Page" className={ styles.page }>
                <div className={ styles.left }>
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
    );
  }
}