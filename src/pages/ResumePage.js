import React, { Component } from 'react';
import styles from '../SCSS/Resume.module.scss';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

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
                    <div id="Hobbies" style={{borderBottom: "3px solid #000000"}}>
                        <h1>Hobbies</h1>
                        { source.hobbies.map( ( hobby, i ) =>
                            <div key = { i }>
                                <div>
                                  { hobby.title }
                                </div>
                                <div>
                                  { hobby.description }
                                </div>
                            </div>
                        ) }
                    </div>
                    <div id="Projects" style={{borderBottom: "3px solid #000000"}}>
                        <h1>Projects</h1>
                        { source.projects.map( ( project, i ) =>
                            <div key = { i }>
                                <div>
                                  { project.title }
                                </div>
                                <div>
                                  { project.description }
                                </div>
                            </div>
                        ) }
                    </div>
                    <div id="Relevant Work" style={{borderBottom: "3px solid #000000"}}>
                        <h1>Relevant Work</h1>
                        { source.relevantWork.map( ( relevantWork, i ) =>
                            <div key = { i }>
                                <div>
                                  { relevantWork.title }
                                </div>
                                <div>
                                  { relevantWork.description }
                                </div>
                            </div>
                        ) }
                    </div>
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