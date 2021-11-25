import React, { Component } from 'react';
import student_account from './js/StudentObject'; //The object for the students
import './css/style_signupform.css'; //CSS

const windowBaseURL = 'http://localhost:3000';

// TO DO:
// - Change the department selector into a dropdown menu

//Sign up Page Display function
const emailError = 'Emails do not match';
const passwordError = 'Passwords do not match'

class SignupPage extends Component {
    constructor (props) {
      super (props);
      this.state = {
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        confemail: '',
        dob: '',
        phone: '',
        dept: '',
        programcode: '',
        username: '',
        password: '',
        confpassword: '',
        dateofregistry: ''
      };
  
      this.eventHandlerChange = this.eventHandlerChange.bind(this);
      this.eventHandlerSubmit = this.eventHandlerSubmit.bind(this);
    }
    
    //This handles the moment a change occurs in the form
    eventHandlerChange(update) {
      const id = update.target.name;
      this.setState({[id] : update.target.value});
      console.log(update.target.name);
    }
    
    eventHandlerGoToLogin() {
      window.location = windowBaseURL + '/login';
    }

    checkForErrors() {
      //The goal is to make it so if any of the logic calcs end up true it does not proceed.
      //This will collect whether the username is taken
      var err_UsernameTaken = this.props.checkUsername(this.state.username);

      //This will collect whether the passwords are different
      var err_PasswordsDifferent = (this.state.password !== this.state.confpassword);

      //This will collect whether the emails are different
      var err_EmailsDifferent = (this.state.email !== this.state.confemail);

      //This will check if the Email is already used
      var err_EmailTaken = this.props.checkEmail(this.state.email);

      //This will collect whether the department code is valid
      var err_ProgcodeIncorrect = this.props.checkProgCode;

      //This will collect whether each key is filled in the page
      var err_NotAllFilled = () => { 
        var unfilled = false;

        for(const key in this.state) { 
          if((this.state[key] === '') && (key !== 'dateofregistry')) {
            unfilled = true;
          }
        }

        return unfilled
      }

      //Returns true if an error was found, false if no errors were found
      return (err_UsernameTaken || err_PasswordsDifferent || err_EmailsDifferent || err_EmailTaken || err_ProgcodeIncorrect || err_NotAllFilled);
    }

    createAccount(thisUser) {
      //Send it
      //Add all from the old list into the new one then set the json as the new one
      this.props.CompleteRegister(thisUser);
    }

    eventHandlerSubmit(submit) {
      submit.preventDefault();

      //Make checks for if all the data is correct. checkForErrors returns true if one was found
      if(this.checkForErrors()) {

      }
      //If no errors were found, create the account and send it
      else {
        this.createAccount( new student_account(
          this.state.username, 
          this.state.password, 
          this.state.firstname, 
          this.state.middlename, 
          this.state.lastname, 
          this.state.email, 
          this.state.dob, 
          this.state.phone, 
          this.state.dept,
          this.state.programcode,
          new Date().getDate()
        ));
      }
    }
    
    

    render() {
      return (
        <div id="signup-page-body">
          <form id="signupForm" onSubmit={this.eventHandlerSubmit}>
            <h2>Register</h2>
            <grid-container id="nameGrid">
              <div>
                <label>First Name</label><br></br>
                <input type="text" id="inFirstName" name='firstname' onChange={this.eventHandlerChange}></input>
              </div>
              <div>
                <label>Middle Name</label><br></br>
                <input type="text" id="inMiddleName" name='middlename' onChange={this.eventHandlerChange}></input>
              </div>
              <div>
                <label>Last Name</label><br></br>
                <input type="text" id="inLastName" name='lastname'  onChange={this.eventHandlerChange}></input>
              </div>
            </grid-container><br></br>
            <grid-container id="emailGrid">
              <div>
                <label>Email</label><br></br>
                <input type="text" id="inEmail" name='email'  onChange={this.eventHandlerChange}></input>
              </div>
              <div>
                <label>Confirm Email</label><br></br>
                <input type="text" id="inConfEmail" name='confemail' onChange={this.eventHandlerChange}></input>
              </div>
            </grid-container><br></br>
            <grid-container id="personalDetGrid">
              <div>
                <label>Date of Birth</label><br></br>
                <input type="date" id="inBirthDate" name='dob' onChange={this.eventHandlerChange}></input>
              </div>
              <div>
                <label>Phone Number</label><br></br>
                <input type="text" id="inPhone" name='phone' onChange={this.eventHandlerChange}></input>
              </div>
            </grid-container><br></br>
            <div>
              <h4>Program Information</h4>
              <grid-container id="progInfoGrid">
                <div>
                  <label>Department</label><br></br>
                  <input type="text" id="inDepartment" name='dept' onChange={this.eventHandlerChange}></input>
                </div>
                <div>
                  <label>Program Code</label><br></br>
                  <input type="text" id="inProgCode" name='programcode' onChange={this.eventHandlerChange}></input>
                </div>
              </grid-container>
            </div><br></br>
            <label>Username</label><br></br>
            <input type="text" id="inUsername" name='username' onChange={this.eventHandlerChange}></input>
            <button>Generate</button><br></br><br></br>
            <grid-container id="passGrid">
                <div>
                  <label>Password</label><br></br>
                  <input type="password" id="inPass" name='password' onChange={this.eventHandlerChange}></input>
                </div>
                <div>
                  <label>Confirm Password</label><br></br>
                  <input type="password" id="inConfPass" name='confpassword' onChange={this.eventHandlerChange}></input>
                </div>
            </grid-container>
            <div id="captcha"></div><br></br>
            <button type="submit" value="Submit">Submit</button><br></br>
            <br></br>
            <button type="button" id="loginLink" onClick={this.eventHandlerGoToLogin}>Log In ➟</button>
          </form> 
          
        </div>
      );
    }
  }
  
  export default SignupPage;