//display check options:
//  pull titles from json
//STORE ARRAY OF CHECKLIST 

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
  faHashtag
 } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component{
  constructor(props) {
    super(props);

    this.updateHobbies = this.updateHobbies.bind( this );
    this.updateProjects = this.updateProjects.bind( this );
    this.updateRelevantWork = this.updateRelevantWork.bind( this );
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

  updateHobbies( updateHobbies ) {
    this.updateFields( { hobbies: updateHobbies } );
  }

  updateProjects( updatedProjects ) {
    this.updateFields( { projects: updatedProjects } );
  }

  updateRelevantWork( updatedRelevantWork ) {
    this.updateFields( { relevantWork: updatedRelevantWork } );
  }

  render(){
    return(
      <div>
        <div class="container">
            <h1>Hire Me Pwease :3c</h1>
            <p>Help me Mr. Obama.</p>
        </div>
        <div class="container">
          <Form>
            <h2>Personal Information</h2>
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
                    <FontAwesomeIcon icon={ faEnvelope } size="md" style={{ marginRight: "5px"}}/>
                    <label for="emailInput">Email Address</label>
                    <input class="form-control" placeholder="president@uwaterloo.ca" />
                  </div>
                  <div class="col">
                    <FontAwesomeIcon icon={ faPhone } size="md" style={{ marginRight: "5px"}}/>
                    <label for="phoneInput">Phone Number</label>
                    <input class="form-control" placeholder="1-800-267-2001" />
                  </div>
                  <div class="col">
                    <FontAwesomeIcon icon={ faFireAlt } size="md" style={{ marginRight: "5px"}}/>
                    <label for="phoneInput">Tinder Profile</label>
                    <input class="form-control" placeholder="looking4truluv" />
                  </div>
                  <div class="col">
                    <FontAwesomeIcon icon={ faHashtag } size="md" style={{ marginRight: "5px"}}/>
                    <label for="phoneInput">Instagram</label>
                    <input class="form-control" placeholder="@BarackObama" />
                  </div>
                </div>
            </div>
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
              <button class="btn btn-primary" onClick={ () => this.generateResume() }>Submit</button>
          </div>
        </Form>
        </div>
      </div>
    )
  }
}
