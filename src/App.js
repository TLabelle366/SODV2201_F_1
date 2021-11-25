/* NOTES

*/
// Functionality Imports
import * as React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { Redirect } from 'react-router';
import { DbController } from './sourcefiles/database/DatabaseController';

//Page Imports
import LoginPage from './sourcefiles/LoginForm.js';
import SignupPage from './sourcefiles/SignupForm.js';
import Header from './sourcefiles/components/Header.js';
import Home from './sourcefiles/Home.js';
import Account from './sourcefiles/Account.js';
import { Contact, AdminContact } from './sourcefiles/Contact.js';
import Transcript from './sourcefiles/Transcript.js';
import { AdminCourses, Courses } from './sourcefiles/Courses.js';

//CSS Imports
import './App.css';

//File constants
const db = new DbController;
const tempAdminUsername = 'administrator';
const tempAdminPassword = 'administrator';
const C = "Course", P = "Program", CF = "Contact forms";

const NavS = {
    top:'0',
    width:'100%',
    height:'50px',
    display: 'flex',
    alignitems: 'center',
    justifycontent: 'center',
    backgroundColor:'grey',
}

const homnavstyle= { 
    display:'inline-block',
    position:'absolute',
    left:'40%'
   }

//The class to export
class Display extends React.Component {
    
    //This is the main constructor
    constructor() {
        super();
        this.state = {
            //This variable holds onto a logged in user's username for future use and identification
            signedInUser: undefined
        }
    }

    //Login Page Functionality
    //Returns true if the username and password match
    tryLogin = (username, password) => {
        //Check if it's the administrator
        if((username === tempAdminUsername) && (password === tempAdminPassword)){
            this.setState({signedInUser: username});
        }

        //Loop through and try to find a matching username
        var curdb = db.getAllUsers();
        curdb.find(element => {
            if(element.username === username) {
                if(element.password === password) {
                    this.setState({signedInUser: username});
                }
            }
        });

        return this.state.loggedInUser;
    }
    
    //Signup functions
    //Returns true if the username is taken
    checkUsernameTaken = (username) => {
        var isavail = true;

        //Loops through the data to see if the username is taken.
        db.getAllUsers().find(element => {
        if(element.username === username) {
            isavail = false;
        }
        });

        return !isavail;
    }

    //Returns true if the email is taken
    checkEmailAvailable = (email) => {
        var isavail = true;

        //Loops through the data to see if the username is taken
        db.getAllUsers().find(element => {
        if(element.email === email) {
            isavail = false;
        }
        });

        return isavail;
    }
             
    //Returns true if the prog code is correct
    checkProgCodeCorrect = (code) => {
        //Temporarily just return true until we have a list of valid codes
        return true;
    }

    //Completes the registration of the new user
    completeUserRegistration = (userObject) => {
        //Add to the array
        db.add(userObject);
    }

    //Handles the logout for changing the state and stuff
    logout = () => {
        this.setState({signedInUser: undefined});
        window.location.href = 'http://localhost:3000/login';
    }

    render() {
        //Check if a user is signed in, so to know whether or not to send them to the sign-in/sign-up pages
        switch(this.state.signedInUser){
            //This is if the user is not logged in. No Toolbar, but load a footer (when it's made)
            case undefined:
                return (
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login"><LoginPage tryLogin = {this.tryLogin}/></Route>
                            <Route path="/register"><SignupPage checkUsername={this.checkUsernameTaken} checkEmail={this.checkEmailAvailable} checkProgCode={this.checkProgCodeCorrect} completeRegister={this.completeUserRegistration}/></Route>
                            <Redirect to='/login'/>
                        </Switch>
                    </BrowserRouter>
                  );

            //Future implimentation: This is when the administrator is signed in
            case tempAdminUsername:
                return (
                    <BrowserRouter basename='/public' style='text-align:center'>
                        <Header/>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/account" component={Account} />
                            <Route path="/contact" component={AdminContact} />
                            <Route path="/transcript" component={Transcript} />
                            <Route path="/courses" component={AdminCourses} />
                            <Route path="/logout"><Logout logout={this.logout}/></Route>
                            <Redirect to='/home'/>
                        </Switch>
                    </BrowserRouter>
                );

            //This will send people to the home page or any other page. If it gets here someone is signed in and are not the admin.
            default:
                return (
                    <BrowserRouter basename='/public' style='text-align:center'>
                        <Header/>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/account" component={Account} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/transcript" component={Transcript} />
                            <Route path="/courses" component={Courses} />
                            <Route path="/logout"><Logout logout={this.logout}/></Route>
                            <Redirect to='/home'/>
                        </Switch>
                    </BrowserRouter>
                );
        }
    }
}

//Just handles the logout call
class Logout extends React.Component {
    constructor() { super(); }
    render() {
        this.props.logout();

        return(
            <Link to="http://localhost:3000/login">Click here to be Redirected</Link>
        );
    }
}

export default Display;