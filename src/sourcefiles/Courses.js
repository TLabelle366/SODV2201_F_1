/* NOTES
TO-DO

Edits
- Courses.constructor()
*/

//This is for the course listing page
import React from "react";
import AddPopUp from "./components/Added-Course-Pop-up";
import AboutPopUp from "./components/Temp-About-Popup";
//import './css/style_transcript_courses.css';

import { DbController } from './sourcefiles/database/DatabaseController';

//Jo Imports
import './css/TEMPCSS/course.css';
import './css/TEMPCSS/List.css';

//Constants
const db = new DbController;

export class Courses extends React.Component {
    constructor() {
        super()
        this.state = {
            courseData: db.getAllCourses(),
            search: ""
        }
    }
    updateSearch(event) {
        this.setState({ search: event.target.value })
    }

    render() {
        let filteredCourses = this.state.courseData.filter(
            (course) => {
                return course.courseName.toLocaleLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="TForm">
                <h1 id="Title">Courses</h1>
                <div id="searchSec">
                    <input type="text" placeholder="Search..." id="searchBar" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    <p></p>
                    <div className="course_Window">
                        {filteredCourses.map(data => {
                            return (
                                <div className="course_Specific">
                                    <AddPopUp />
                                    <AboutPopUp /><h2>{data.courseName}</h2>
                                    <span className="spans">Course ID: </span>{data.courseID}
                                    <br />
                                    <span className="spans">Teacher: </span>{data.teacher}
                                    <br />
                                    <span className="spans">Course Passing Grade: </span>{data.passinggrade}%
                                    <br />
                                    <span className="spans">Starting Date: </span>{data.sDate} <span className="spans" id="credits">Credits Achievable: {data.credits}</span>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

//export default Courses
const SearchBar = {
    width:'99%'
}

export class AdminCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            course: "",       
            Cedit: false,
            courseData: db.getAllCourses()
        }

        // binds event listeneres to the component so they can reference it in code
        this.HandleClick = this.HandleClick.bind(this);
        this.Search = this.Search.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.edit = this.edit.bind(this);
        this.done = this.done.bind(this);
        this.delete = this.delete.bind(this);
    }

    // event handlers
    // tracks which course you are currently viewing the expanded information for 
    HandleClick(targettedelement) {
        if(this.state.course === targettedelement.target.value) { this.setState({course:""}); }
        else { this.setState({course: targettedelement.target.value}); }
    }

    // chekcs to see all nescecary info was provided then adds a new entry
    addNewItem(editButton) {
        if(this.state.courseName === "" || this.state.sDate === "" || this.state.eDate === "") {
            alert("Please fill in all three fields to add a new entry");
        }
        else {
            var CFill = [...this.state.courseData];

            CFill.push(new course(
                this.refs.courseName_ref.value,
                this.refs.sDate_ref.value,
                this.refs.eDate_ref.value
            ));

            this.refs.courseName_ref.value="";
            this.refs.sDate_ref.value="";
            this.refs.eDate_ref.value="";

            //SET A PROPER DATABASE UPDATE
            this.setState({courseData: CFill});
        }
    }

    // filters out course results by exact search
    Search(searchElement) { this.setState({Search: searchElement.target.value}); }

    // adds input boxes to make course info editable
    edit() { this.setState({Cedit : true}) }

    // removes the selected course
    delete(e) {
        var Cfill = [];
        for(var i=0; i < this.state.courseData.length; i++) {
            if(e.target.name !== this.state.courseData[i].courseName ) {
                Cfill.push(this.state.courseData[i]);
            }
        }
        this.setState({courseData:Cfill});
    }

    // checks if any changes have been made tot eh coruse info and if they have records the new changes and remmoves the input fields for making changes
    done() {
        if(
            this.refs.courseName_ref.value !== this.refs.courseName_ref.defaultvalue || 
            this.refs.sDate_ref.value !== this.refs.sDate_ref.defaultvalue ||
            this.refs.eDate_ref.value !== this.refs.eDate_ref.defaultvalue
            ) {
            var CFill = [...this.state.courseData];
            
            for(var i=0; i < CFill.length; i++) {
                //console.log(CFill[i].Cname);
                //console.log(CFill[i].Sdate);
                //console.log(CFill[i].Edate);
                if(CFill[i].courseName === this.refs.courseName_ref.defaultValue) {
                    //console.log("Match Found")
                    CFill[i].courseName = this.refs.courseName_ref.value;
                    CFill[i].Sdate = this.refs.sDate_ref.value;
                    CFill[i].Edate = this.refs.eDate_ref.value;
                    //console.log(CFill[i].Cname);
                    //console.log(CFill[i].Sdate);
                    //console.log(CFill[i].Edate);
                }
                //console.log("reading but not making changes");
            }

            this.setState({Cedit : false});
            this.setState({courseData: CFill});
        }
        else {
            this.setState({Cedit : false})
            //console.log("not reading changes");
        }
    }

    render() {
        return (
            <span className ="Mc">
                <div className="Mc2">
                    <input type="text" style={SearchBar} onChange={e => this.Search(e)} ></input>
                    <ul classname="list">{
                        this.state.courseData.map((courseName, itt) => {
                            // checks if htere is any search values and renders appropriate info based on if there is a search or currently viewed course
                            if(this.state.search === "") {
                                if(this.state.course === courseName.courseName) {
                                    if(this.state.Cedit === true) {
                                        return (
                                            <li className="CLi" key ={courseName.courseName}>
                                                <p className = "title">Course Name: {courseName.courseName}</p>
                                                <button onClick={e => this.HandleClick(e)} value={courseName.courseName}>V</button><br></br>
                                                <p className="Cinfo"> Course Name: {courseName.courseName}  Course Start Date: {courseName.sDate} Course End Date: {courseName.eDate}</p><br></br>
                                                <p className="inputP">Course Name: </p>
                                                <input type="text" name="courseName" className="input" ref="courseName_ref" ></input>
                                                <p className ="inputP">Course Start Date: </p>
                                                <input type = "text" name="sDate" className="input" ref="sDate_ref"></input>
                                                <p className ="inputP">Course End Date: </p>
                                                <input type = "text" name = "eDate" className="input" ref="eDate_ref"></input><br></br>
                                                <button onClick={()=>this.done()} className ="specificButts">done</button>
                                                <button className ="specificButts" onClick={(e)=>this.delete(e)} name={courseName.courseName}>Delete</button>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li className="CLi" key ={courseName.courseName}>
                                            <p className="title">course Name:  {courseName.courseName}</p>
                                            <button onClick={e=>this.HandleClick(e)} value={courseName.courseName}>V</button>
                                            <br/>
                                            <p className="Cinfo"> Course Name: {courseName.courseName} Course Start Date: {courseName.Sdate} Course End Date: {courseName.Edate}</p>
                                            <br/>
                                            <button onClick={() =>this.edit()} className ="specificButts">Edit</button>
                                            <button className="specificButts" onClick={(e)=>this.delete(e)} name={courseName.courseName}>Delete</button>
                                        </li>
                                    );
                                }
                                else {
                                    return (
                                        <li className="CLi" key ={courseName.courseName}>
                                            <p className="title">Course Name: {courseName.courseName}</p>
                                            <button onClick={e=>this.HandleClick(e)} value={courseName.courseName}>V</button>
                                        </li>
                                    );
                                }
                            }
                            else {
                                var fillSlow=this.state.search.toLowerCase(), FillSUp=this.state.search.toUpperCase();

                                for(var itt=0; itt < this.Search.length+1; itt++) {
                                    if(itt == this.Search.length) {
                                        if(this.state.course === courseName.courseName && courseName.courseName.includes(this.state.search)) {
                                            if(this.state.Cedit === true) {
                                                return (
                                                    <li className="CLi" key={courseName.courseName}>
                                                        <p className = "title">course  Name:  {courseName.courseName}</p>
                                                        <button onClick={e=>this.HandleClick(e)} value={courseName.courseName}>V</button>
                                                        <br></br>
                                                        <p className="Cinfo"> Course Name: {courseName.courseName} Course Start Date: {courseName.sDate} Course End Date: {courseName.eDate}</p>
                                                        <br/>
                                                        <p className ="inputP">Course Name: </p>
                                                        <input type = "text" name = "courseName" className="input" ref="courseName_ref"/>
                                                        <p className ="inputP">Course start date:</p>
                                                        <input type = "text" name = "sDate" className="input" ref="sDate_ref"/>
                                                        <p className ="inputP">course end date:</p>
                                                        <input type="text" name="eDate" className="input" ref="eDate_ref"/>
                                                        <br/>
                                                        <button onClick={() =>this.done()} className ="specificButts">done</button>
                                                        <button className ="specificButts" onClick={(e)=> this.delete(e)} name={courseName.courseName}>Delete</button>
                                                    </li>
                                                )
                                            }
                                            return (
                                                <li className="CLi" key ={courseName.courseName}>
                                                    <p className = "title">Course Name: {courseName.courseName}</p>
                                                    <button onClick={e => this.HandleClick(e)} value={courseName.courseName}>V</button>
                                                    <br/>
                                                    <p className="Cinfo">Course Name: {courseName.courseName}  Course Start date: {courseName.sDate} Course End Date: {courseName.eDate}</p>
                                                    <br/>
                                                    <button onClick={() =>this.edit()} className ="specificButts">Edit</button>
                                                    <button  className ="specificButts" onClick = {(e)=> this.delete(e)} name = {courseName.courseName}>Delete</button>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li className="CLi" key={courseName.courseName}>
                                                    <p className="title">Course Name: {courseName.courseName}</p>
                                                    <button onClick={e=>this.HandleClick(e)} value={courseName.courseName}>V</button>
                                                </li>
                                            )
                                        }
                                    }
                                    else if(courseName.courseName.includes(FillSUp[itt])||courseName.courseName.includes(fillSlow[itt])) { continue; }
                                    else { break; }
                                }
                            }
                        })
                    }</ul>
                </div>
                <div className ="NewCourse">
                    <p className="inputP">Course Name:</p>
                    <input type="text" name="courseName" className="input" ref="courseName_ref"></input>
                    <p className="inputP"> Course Start Date:</p>
                    <input type="text" name = "sDate" className="input" ref="courseName_ref"></input>
                    <p className="inputP">Course End Date:</p>
                    <input type="text" name="eDate" className="input" ref="courseName_ref"></input>
                    <p className="inputP">Teacher:</p>
                    <input type="text" name="teacher" className="input" ref="teacher_ref"></input>
                    <p className="inputP">Status:</p>
                    <input type="text" name="status" className="input" ref="status_ref"></input>
                    <button onClick={() =>this.addNewItem()} className="NcAdd"> Add Item </button>
                </div>
            </span>
        );//records,saves and submits data for new coruses
    }
}