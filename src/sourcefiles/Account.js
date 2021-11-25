import React from 'react';
import AboutPopUp from './components/Temp-About-Popup';
import './css/style_account.css';

class Account extends React.Component {
    constructor(props) {
        super()
        this.state = {
            //this is stand in values, once back-end is implemented the values are switched out for account specific items
            //personal information values
            showTrans: false,

            fName: "Bob",
            lName: "Smith",
            email: "studnet@email.com",
            address: "123 Street NE, City, CO",
            phone: "444-555-7777",

            //student data information
            program: "Software Dev",
            id: "12345",
            gpa: "3.4",
            sDate: "04/02/2018",
            cDate: "01/03/2021",

            //this is an array of key value pairs of course props it is used only in one section where toggleTranscript is involved 
            //Can literally be replaced by a proper JSON file at any time I just did want to make a full on JSON file for this 
            courseTrans: [
                {
                    courseID: 123,
                    courseName: "SCP-001",
                    grade: 55,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "02/06/2021",
                    cDate: "05/07/2021"
                }, {
                    courseID: 456,
                    courseName: "SCP-867",
                    grade: 98,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "01/08/2011",
                    cDate: "05/01/2012"
                }, {
                    courseID: 789,
                    courseName: "SCP-999",
                    grade: 76,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "02/11/2019",
                    cDate: "03/02/2020"
                },
                {
                    courseID: 666,
                    courseName: "LSD-5431",
                    grade: 0,
                    teacher: "Mr.Lewis",
                    status: "In-Progress",
                    sDate: "02/11/2020",
                    cDate: "N/A"
                }, {
                    courseID: 999,
                    courseName: "Transmuation 101",
                    grade: 0,
                    teacher: "Mr.Elric",
                    status: "In-Progress",
                    sDate: "03/10/11",
                    cDate: "N/A"
                }
            ]
        }
    }

    toggleTranscriptHanddler = () => {
        //this basically just changes the state of showFriends from false to true and from true to false 
        const show = this.state.showTrans
        this.setState({ showTrans: !show })
    }

    render() {
        let toggleTranscript = null
        if (this.state.showTrans) {
            toggleTranscript = (
                <div>
                    <br />
                    <div className="course_Window">
                        {this.state.courseTrans.map(courseInfo => {
                            return (
                                <div className="course_Specific">

                                    <AboutPopUp /><h2>{courseInfo.courseName}</h2>
                                    <span className="spans">Course Lead: </span>{courseInfo.teacher} <br />
                                    <span className="spans">Course Duration </span>{courseInfo.sDate} - {courseInfo.cDate}<br />
                                    <span className="spans"> Course Final Grade: </span> {courseInfo.grade}% <br />
                                    <span className="spans"> Course Status: </span> {courseInfo.status}<p />

                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div className="AForm" >
                <div id="accountForm">
                    <h1>Account Info</h1>
                    <div id="pInfo">
                        <span className="spans">Full Name:</span>  {this.state.lName}, {this.state.fName}
                        <br />
                        <span className="spans">ID:</span> {this.state.id}
                        <br />
                        <span className="spans">Email:</span> {this.state.email}
                        <br />
                        <span className="spans">Address: </span> {this.state.address}
                        <br />
                        <span className="spans">Phone: </span> {this.state.phone}
                    </div>
                    <br />
                    <div id="sInfo">
                        <span className="spans">Program: </span> {this.state.program}
                        <br />
                        <span className="spans">GPA:</span> {this.state.gpa}
                        <br />
                        <span className="spans">Starting Date: </span> {this.state.sDate}
                        <br />
                        <span className="spans">Apr. Completion Date: </span> {this.state.cDate}
                    </div>
                </div>

                <div>
                    <button className="mainBtn" id="tran" onClick={this.toggleTranscriptHanddler}>Transcript</button>
                    <input type="button" value="Logout" className="mainBtn" id="logout" />
                </div>
                {toggleTranscript}
            </div>
        )
    }
}

export default Account

