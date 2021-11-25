//This is for the course listing page
import React from "react";
import AddPopUp from "./components/Added-Course-Pop-up";
import AboutPopUp from "./components/Temp-About-Popup";
//import './css/style_transcript_courses.css';

//Jo Imports
import './css/TEMPCSS/course.css';
import './css/TEMPCSS/List.css';

export class Courses extends React.Component {
    constructor() {
        super()
        this.state = {
            courseData: [
                {
                    courseID: 1234,
                    courseName: "SCP-001",
                    passinggrade: 50,
                    teacher: "Mr.Lewis",
                    status: "N/A",
                    sDate: "05/12/2021",
                    credits: 3
                }, {
                    courseID: 4560,
                    courseName: "MGMT-765",
                    passinggrade: 50,
                    teacher: "Mr.Lewis",
                    status: "N/A",
                    sDate: "05/12/2021",
                    credits: 3
                }, {
                    courseID: 7879,
                    courseName: "Tech-786",
                    passinggrade: 50,
                    teacher: "Mr.Lewis",
                    status: "N/A",
                    sDate: "05/12/2021",
                    credits: 3
                },
                {
                    courseID: 1299,
                    courseName: "MTH-785",
                    passinggrade: 50,
                    teacher: "Mrs.Jenkins",
                    status: "N/A",
                    sDate: "05/12/2022",
                    credits: 3
                }, {
                    courseID: 4581,
                    courseName: "MGMT-765",
                    passinggrade: 50,
                    teacher: "Mr.Lewis",
                    status: "N/A",
                    sDate: "05/12/2022",
                    credits: 3
                }, {
                    courseID: 7800,
                    courseName: "Tech-1000",
                    passinggrade: 50,
                    teacher: "Mr.Jones",
                    status: "N/A",
                    sDate: "05/12/2022",
                    credits: 3
                },
                {
                    courseID: 1316,
                    courseName: "JV-231",
                    passinggrade: 50,
                    teacher: "Mrs.Carter",
                    status: "N/A",
                    sDate: "N/A",
                    credits: 3
                }, {
                    courseID: 4260,
                    courseName: "PSCY-7100",
                    passinggrade: 50,
                    teacher: "N/A",
                    status: "N/A",
                    sDate: "N/A",
                    credits: 3
                }, {
                    courseID: 7679,
                    courseName: "MECH-2315",
                    passinggrade: 50,
                    teacher: "N/A",
                    status: "N/A",
                    sDate: "N/A",
                    credits: 3
                },
            ],
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
                {/**/}
            </div >
        )
    }
}

//export default Courses


/* function CourseObject() {
    this.Cname = Cname;
    this.Cid = Cid;
    this.CDesc = CDesc;
    this.CSeatsTaken = CSeatsTaken;
    this.CTotalSeats = this.CTotalSeats;
    this.Sdate = Sdate;
    this.Edate = Edate;
}*/


function course(coursename, coursestartdate, courseenddate) {
    this.Cname = coursename;
    this.Sdate = coursestartdate;
    this.Edate = courseenddate;
}

const SearchBar = {
    width:'99%'
}

export class AdminCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: "",
            course: "",       
            Cedit: false,
            Coruses: [
                new course('Science101', 'january 15 2022', 'april23'),
                new course('Math101', 'january 15 2022', 'april23'),
                new course('History101', 'january 15 2022', 'april23'),
                new course('Programing101', 'january 15 2022', 'april23'),
                new course('roject management101', 'january 15 2022', 'april23'),
                new course('Networking', 'january 15 2022', 'april23'),
                new course('working in a team', 'january 15 2022', 'april23')  
            ]               
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
    HandleClick(eventelement) {
        if(this.state.course === eventelement.target.value) { this.setState({course:""}); }
        else { this.setState({course: eventelement.target.value}); }
    }

    // chekcs to see all nescecary info was provided then adds a new entry
    addNewItem(editButton) {
        if(this.state.Cname === "" || this.state.Sdate === "" || this.state.Edate === "") {
            alert( " please fill in all three fields to add a new entry")
        }
        else {
            var CFill = [...this.state.Coruses];
            CFill.push(new course(        
            this.refs.InCname.value,
            this.refs.InSdate.value,
            this.refs.InEdate.value));
            this.refs.InCname.value ="";
            this.refs.InSdate.value ="";
            this.refs.InEdate.value ="";
            this.setState({Coruses: CFill});
        }
    }

    // filters out course results by exact search
    Search(searchElement) {
        this.setState({Search: searchElement.target.value});
        console.log("hi");
        console.log(this.state.Search);
    }

    // adds input boxes to make course info editable
    edit() { this.setState({Cedit : true}) }

    // removes the selected course
    delete(e) {
        var Cfill = [];
        for(var i=0; i<this.state.Coruses.length;i++) {
            if(e.target.name !== this.state.Coruses[i].Cname ) {
                Cfill.push(this.state.Coruses[i]);
            }
        }
        this.setState({Coruses:Cfill});
    }

    // checks if any changes have been made tot eh coruse info and if they have records the new changes and remmoves the input fields for making changes
    done() {
        if(
            this.refs.ECname.value !== this.refs.ECname.defaultvalue || 
            this.refs.ESdate.value !== this.refs.ESdate.defaultvalue ||
            this.refs.EEdate.value !== this.refs.EEdate.defaultvalue
            ) {
            var CFill = [...this.state.Coruses];
            
            for(var i =0; i <CFill.length; i++) {
                //console.log(CFill[i].Cname);
                //console.log(CFill[i].Sdate);
                //console.log(CFill[i].Edate);
                if(CFill[i].Cname === this.refs.ECname.defaultValue) {
                    //console.log("Match Found")
                    CFill[i].Cname = this.refs.ECname.value;
                    CFill[i].Sdate = this.refs.ESdate.value;
                    CFill[i].Edate = this.refs.EEdate.value;
                    //console.log(CFill[i].Cname);
                    //console.log(CFill[i].Sdate);
                    //console.log(CFill[i].Edate);
                }
                //console.log("reading but not making changes");
            }

            this.setState({Cedit : false});
            this.setState({Coruses: CFill});
        }
        else {
            this.setState({Cedit : false})
            console.log("not reading changes");
        }
    }

    render() {
        return (
            <span className ="Mc">
                <div className ="Mc2">
                    <input type ="text" style={SearchBar} onChange={e => this.Search(e)} ></input>
                    <ul classname = "list">{
                        this.state.Coruses.map((Cname,i) => {
                            // checks if htere is any search values and renders appropriate info based on if there is a search or currently viewed course
                            if(this.state.Search === "") {
                                if(this.state.course === Cname.Cname) {
                                    if(this.state.Cedit === true) {
                                        return (
                                            <li className="CLi" key ={Cname.cname}>
                                                <p className = "title">course  Name:  {Cname.Cname}</p>
                                                <button onClick={e => this.HandleClick(e)} value = {Cname.Cname}  >V</button><br></br>
                                                <p  className="Cinfo"> course Name: {Cname.Cname}  course Start date: {Cname.Sdate}    course end date: {Cname.Edate}</p><br></br>
                                                <p className ="inputP">Course name: </p>
                                                <input type = "text" name = "Cname" className="input" ref="ECname" ></input>
                                                <p className ="inputP"> Course start date: </p>
                                                <input type = "text" name = "Sdate" className="input" ref="ESdate"></input>
                                                <p className ="inputP">course end date: </p>
                                                <input type = "text" name = "Edate" className="input"   ref="EEdate"></input><br></br>
                                                <button onClick={() =>this.done()} className ="specificButts">done</button>
                                                <button  className ="specificButts" onClick = {(e)=> this.delete(e)} name = {Cname.Cname}>Delete</button>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li className="CLi" key ={Cname.cname}>
                                            <p className = "title">course Name:  {Cname.Cname}</p>
                                            <button onClick={e => this.HandleClick(e)} value={Cname.Cname}>V</button>
                                            <br/>
                                            <p className="Cinfo"> course Name: {Cname.Cname}  course Start date: {Cname.Sdate}    course end date: {Cname.Edate}</p>
                                            <br/>
                                            <button onClick={() =>this.edit()} className ="specificButts">Edit</button>
                                            <button  className ="specificButts" onClick = {(e)=> this.delete(e)} name = {Cname.Cname}>Delete</button>
                                        </li>
                                    );
                                }
                                else {
                                    return (
                                        <li className="CLi" key ={Cname.cname}>
                                            <p className = "title">course Name: {Cname.Cname}</p>
                                            <button onClick={e => this.HandleClick(e)} value = {Cname.Cname}>V</button>
                                        </li>
                                    );
                                }
                            }
                            else {
                                var fillSlow = this.state.Search.toLowerCase(), FillSUp = this.state.Search.toUpperCase();

                                for(var i=0;i<this.Search.length+1;i++) {
                                    if(i==this.Search.length) {
                                        if(this.state.course === Cname.Cname && Cname.Cname.includes(this.state.Search)) {
                                            if(this.state.Cedit === true) {
                                                return (
                                                    <li className="CLi" key ={Cname.cname}>
                                                        <p className = "title">course  Name:  {Cname.Cname}</p>
                                                        <button onClick={e=>this.HandleClick(e)} value={Cname.Cname}>V</button>
                                                        <br></br>
                                                        <p className="Cinfo"> course Name: {Cname.Cname}  course Start date: {Cname.Sdate}    course end date: {Cname.Edate}</p>
                                                        <br/>
                                                        <p className ="inputP">Course name:</p>
                                                        <input type = "text" name = "Cname" className="input" ref="ECname"/>
                                                        <p className ="inputP">Course start date:</p>
                                                        <input type = "text" name = "Sdate" className="input" ref="ESdate"/>
                                                        <p className ="inputP">course end date:</p>
                                                        <input type = "text" name = "Edate" className="input"   ref="EEdate"/>
                                                        <br/>
                                                        <button onClick={() =>this.done()} className ="specificButts">done</button>
                                                        <button className ="specificButts" onClick={(e)=> this.delete(e)} name={Cname.Cname}>Delete</button>
                                                    </li>
                                                )
                                            }
                                            return (
                                                <li className="CLi" key ={Cname.cname}>
                                                    <p className = "title">course  Name:  {Cname.Cname}</p>
                                                    <button onClick={e => this.HandleClick(e)} value = {Cname.Cname}  >V</button>
                                                    <br/>
                                                    <p className="Cinfo"> course Name: {Cname.Cname}  course Start date: {Cname.Sdate} course end date: {Cname.Edate}</p>
                                                    <br/>
                                                    <button onClick={() =>this.edit()} className ="specificButts">Edit</button>
                                                    <button  className ="specificButts" onClick = {(e)=> this.delete(e)} name = {Cname.Cname}>Delete</button>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li className="CLi"  key ={Cname.cname}>
                                                    <p className = "title">course Name: {Cname.Cname}</p>
                                                    <button onClick={e=>this.HandleClick(e)} value={Cname.Cname}>V</button>
                                                </li>
                                            )
                                        }
                                    }
                                    else if(Cname.Cname.includes(FillSUp[i])||Cname.Cname.includes(fillSlow[i])) { continue; }
                                    else { break; }
                                }
                            }
                        })
                    }</ul>
                </div>
                <div className ="NewCourse">
                    <p className ="inputP">Course name: </p>
                    <input type = "text" name = "Cname" className="input" ref="InCname" ></input>
                    <p className ="inputP"> Course start date: </p>
                    <input type = "text" name = "Sdate" className="input" ref="InSdate"></input>
                    <p className ="inputP">course end date: </p>
                    <input type = "text" name = "Edate" className="input"   ref="InEdate"></input>
                    <button onClick={() =>this.addNewItem()} className="NcAdd"> Add Item </button>
                </div>
            </span>
        );//records,saves and submits data for new coruses
    }
}