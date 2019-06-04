//display check options:
//  pull titles from json
//STORE ARRAY OF CHECKLIST 

import React, { Component } from 'react';
import '../SCSS/styles.css';
import { CheckBoxesComponent } from '../components/HomePageComponents';
import { Form } from 'reactstrap';

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
            <div class="form-group row">
              <label for="text" class="col-4 col-form-label">Text Field</label> 
              <div class="col-8">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-address-card"></i>
                    </div>
                  </div> 
                  <input id="text" name="text" type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-4">Checkboxes</label> 
              <div class="col-8">
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_0" type="checkbox" checked="checked" class="custom-control-input" value="rabbit" /> 
                  <label for="checkbox_0" class="custom-control-label">Rabbit</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_1" type="checkbox" class="custom-control-input" value="duck" /> 
                  <label for="checkbox_1" class="custom-control-label">Duck</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input name="checkbox" id="checkbox_2" type="checkbox" class="custom-control-input" value="fish" /> 
                  <label for="checkbox_2" class="custom-control-label">Fish</label>
                </div>
              </div>
            </div> 
            <div class="form-group row">
              <div class="offset-4 col-8">
                <button name="submit" type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </Form>
          <h2>Personal Information</h2>
          <div class="row">
              <div class="col">
                  <div class="form-group">
                      <label for="firstNameInput">First Name</label>
                      <input class="form-control" id="firstNameInput" placeholder="Chad, Stacey, Elon, Obama" name="firstName" onChange={(e) => this.updateName({firstName: e.target.value })} />
                  </div>
              </div>
              <div class="col">
                  <div class="form-group">
                      <label for="lastNameInput">Last Name</label>
                      <input class="form-control" id="lastNameInput" placeholder="Smith, Musk, Gates, Jobs, etc." name="lastName" onChange={(e) => this.updateName({lastName: e.target.value })}/>
                  </div>
              </div>
          </div>
          <div class="contact-information">
              <div class="row">
                  <div class="col">
                      <label for="emailInput">Email Address</label>
                      <input type="email" class="form-control" id="emailInput" placeholder="president@uwaterloo.ca" name="email" />
                  </div>
                  <div class="col">
                      <label for="phoneInput">Phone Number</label>
                      <input type="phone" class="form-control" id="phoneInput" placeholder="1-800-267-2001" name="phoneNumber" />
                  </div>
              </div>
          </div>
          <CheckBoxesComponent 
              title="Projects"
              fileName="Projects"
              componentName="projects"
              allTheText="All the Projects"
              update={ this.updateProjects }
          />
          <CheckBoxesComponent 
              title="Relevant Work"
              fileName="RelevantWork"
              componentName="relevantWork"
              allTheText="All the Relevant Work"
              update={ this.updateRelevantWork }
          />
          <CheckBoxesComponent 
              title="Hobbies"
              fileName="Hobbies"
              componentName="hobbies"
              allTheText="I'm feeling lucky ;)"
              update={ this.updateHobbies }
          />
        </div>
        <div class="container" style={{ marginTop: "10px" }}>
            <button class="btn btn-primary" type="submit" onClick={ () => this.generateResume() }>
                Gimme Job
            </button>
        </div>
      </div>
    )
  }
}
