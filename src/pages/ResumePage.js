import React, { Component } from 'react';
import styles from '../SCSS/Resume.module.scss';

export default class Resume extends Component{
  constructor( props ) {
    super();
  }

  render(){
    return(
      <div>
        <div id="Resume" className={ styles.resume }>
            <div id="Name" style={{height: "10vw", borderBottom: "3px solid #000000"}}>
                <h1>Name</h1>
                <div>
                    Let's play a game <br />
                    I spy with my little eye...
                </div>
            </div>
            <div id="Page" className={ styles.page }>
                <div className={ styles.left }>
                    <div id="Hobbies" style={{borderBottom: "3px solid #000000"}}>
                        <h1>Hobbies</h1>
                        <div>
                            Anime
                        </div>
                    </div>
                    <div id="Projects" style={{borderBottom: "3px solid #000000"}}>
                        <h1>Projects</h1>
                        <div>
                            FowlPlay
                        </div>
                    </div>
                    <div id="Relevant Work" style={{borderBottom: "3px solid #000000"}}>
                        <h1>Relevant Work</h1>
                        <div>
                            Butthole Chocolate Manufacteurer
                        </div>
                    </div>
                </div>
                <div className={ styles.right }>
                    <div id="Languages">
                        <h1>Languages</h1>
                        <div>
                            Klingon
                        </div>
                    </div>
                    <div id="Contact Info">
                        <h1>Contact Info</h1>
                        <div>
                            Tinder me up
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <button type="button" class="btn btn-dark" onClick="generatePDF()">Download Resume</button>
        </div>
      </div>
    );
  }
}