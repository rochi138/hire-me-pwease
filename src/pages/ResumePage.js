import React, { Component } from 'react';
import styles from '../SCSS/Resume.module.scss';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { CheckBoxesComponent } from '../components/ResumeComponents';

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
    var source = this.props.state;
    return(
      <div>
        <div id="resume" className={ styles.resume }>
            <div id="Name" style={{height: "10vw", borderBottom: "3px solid #000000"}}>
                <h1>Name</h1>
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
                        checkStates={source.hobbies}
                    />
                    <CheckBoxesComponent 
                        title="Projects"
                        fileName="Projects"
                        componentName="projects"
                        checkStates={source.projects}
                    />
                    <CheckBoxesComponent 
                        title="Relevant Work"
                        fileName="RelevantWork"
                        componentName="relevantWork"
                        checkStates={source.relevantWork}
                    />
                </div>
                <div className={ styles.right }>
                    <div id="Languages">
                        <h1>Languages</h1>
                        { source.languages.map( ( language, i ) =>
                            <div key = { i }>
                              { language }
                            </div>
                        ) }
                    </div>
                    <div id="Contact Info">
                        <h1>Contact Info</h1>
                        <div>
                            { source.contactInfo.phone }
                        </div>
                        <div>
                            { source.contactInfo.caption }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <button type="button" class="btn btn-dark" onClick={ () => this.generatePDF() }>Download Resume</button>
        </div>
      </div>
    );
  }
}