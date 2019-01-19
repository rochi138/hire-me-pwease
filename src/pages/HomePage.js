import React, { Component } from 'react';
import '../SCSS/styles.css';

export default class Home extends Component{
    constructor(props) {
        super( props );

        this.state=props.state
        this.handleChange= this.handleChange.bind(this);
    }

  // shouldComponentUpdate(nextProps, nextState){
  //   this.setState( nextProps.state );
  // }

  generateResume() {
    this.props.history.push( '/resume' );
  }

  updateFields( updatedFields ) {
    this.props.moveStateUp( { ...this.state.objectUnderEdit, ...updatedFields } );
    console.log(this.props);
  }

  handleChange( e ) {
    console.log('why');
    this.props.moveStateUp( { ...this.state.objectUnderEdit, ...e.target.value } );
  }

  render(){
    console.log(this.props.state);
    return(
      <div>
            <div class="container">
                <h1>Hire Me Pwease :3c</h1>
                <p>Help me Mr. Obama.</p>
            </div>
            <div class="container">
                <h2>Personal Information</h2>
                <div class="row">
                    <div class="col">
                            <div class="form-group">
                                <label for="firstNameInput">First Name</label>
                                <input type="firstName" class="form-control" id="firstNameInput" placeholder="Chad, Stacey, Elon, Obama" name="firstName" onChange={(e) => this.updateFields({test: e.target.value})} />
                            </div>
                    </div>
                    <div class="col">
                            <div class="form-group">
                                <label for="lastNameInput">Last Name</label>
                                <input type="lastName" class="form-control" id="lastNameInput" placeholder="Smith, Musk, Gates, Jobs, etc." name="lastName" />
                            </div>
                    </div>
                    <div class="col">
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
                            <input type="phone" class="form-control" id="phoneInput" placeholder="1-800-733-6697" name="phoneNumber" />
                        </div>
                    </div>
                </div>

                <h2>Experience</h2>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpGoogle" value="Google"/>
                        <label class="form-check-label" for="checkboxExpGoogle">Google</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpMarijuana" value="Marijuana" />
                        <label class="form-check-label" for="checkboxExpMarijuana">Professional Marijuana Dealer</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpTesla" value="Tesla" />
                        <label class="form-check-label" for="checkboxExpTesla">Tesla</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpCaesars" value="Caesars" />
                        <label class="form-check-label" for="checkboxExpCaesars">Little Caesars</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpWord" value="Word" />
                        <label class="form-check-label" for="checkboxExpWord">Microsoft Word</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpNone" value="None" />
                        <label class="form-check-label" for="checkboxExpNone">None</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="checkboxExpAll" value="All" />
                        <label class="form-check-label" for="checkboxExpAll">All the experience</label>
                    </div>



                <h2>Hobbies</h2>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="checkboxHobbyAnime" value="Anime" />
                    <label class="form-check-label" for="checkboxHobbyAnime">Anime</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="checkboxHobbyCoin" value="Coin collecting" />
                    <label class="form-check-label" for="checkboxHobbyCoin">Coin collecting</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="checkboxHobbyTibetan" value="Tibetan"/>
                    <label class="form-check-label" for="checkboxHobbyTibetan">Tibetan throat singing</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="checkboxHobbyFanfiction" value="Fanfiction" />
                    <label class="form-check-label" for="checkboxHobbyFanfiction">Fanfiction</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="checkboxHobbyReddit" value="Reddit" />
                    <label class="form-check-label" for="checkboxHobbyReddit">Reddit</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="checkboxHobbyLucky" value="Lucky" />
                    <label class="form-check-label" for="checkboxHobbyLucky">I'm feeling lucky ;)</label>
                </div>
            </div>
            <div class="container" style={{ marginTop: "10px" }}>
                <button class="btn btn-primary" type="submit" value="Gimme Job" onClick={ () => this.generateResume() }/>
            </div>
      </div>
    )
  }
}
