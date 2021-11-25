import React, { Component } from 'react';
import  './css/style_loginform.css'; //CSS
const windowBaseURL = 'http://localhost:3000';

//Login Page Display function
//To Do: eventHandlerSubmit
class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
  
      this.eventHandlerChange = this.eventHandlerChange.bind(this);
      this.eventHandlerSubmit = this.eventHandlerSubmit.bind(this);
    }
  
    eventHandlerChange(update) {
      const id = update.target.name;
      this.setState({[id]: update.target.value});
    }
  
    eventHandlerGoToReg() {
      //**Call to Page Change
      window.location.href = windowBaseURL + '/Register';
    }
  
    //Handles the submittion event
    eventHandlerSubmit(submit) {
      submit.preventDefault();

      
      if(this.props.tryLogin(this.state.username, this.state.password)) {
        window.location.href = windowBaseURL + '/Course';
      }
    }

    //Renders the log in form.
    render() {
      return(
        <div id='login-page-body'>
          <img id="login-logo" src="" alt="Logo"></img>
          <div className="form-container" onSubmit={this.eventHandlerSubmit}>
            <form id="loginForm">
              <h2>Login</h2>
              <hr></hr>
              <label>Username</label><br></br>
              <input type="text" id="inUsername" name="username" onChange={this.eventHandlerChange}></input><br></br>
              <br></br>
              <label>Password</label><br></br>
              <input type="text" id="inPassword" name="password" onChange={this.eventHandlerChange}></input><br></br>
            </form>
            <br></br>
            <button id="submitButton" type="submit" form="loginForm" onClick={this.eventHandlerSubmit}>Submit</button><br></br>
            <br></br>
            <button type="button"  id="registerLink" onClick={this.eventHandlerGoToReg}>Register ➟</button>
          </div>
        </div>
      );
    }
}

export default LoginPage;