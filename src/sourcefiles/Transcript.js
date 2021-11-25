import React from "react";
import AboutPopUp from './components/Temp-About-Popup.js';
import './css/style_transcript_courses.css';
class Transcript extends React.Component {
    constructor(props) {
        super()
        this.state = {
            gpa: 3.4,
            search: "",
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
                    courseID: 3333,
                    courseName: "TECH-2001",
                    grade: 44,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "02/06/2021",
                    cDate: "06/10/2021"
                }, {
                    courseID: 5512,
                    courseName: "BIO-9912",
                    grade: 90,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "01/08/2011",
                    cDate: "05/01/2012"
                }, {
                    courseID: 4121,
                    courseName: "LAH-7173",
                    grade: 66,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "02/11/2019",
                    cDate: "03/02/2020"
                },
                {
                    courseID: 6612,
                    courseName: "FGS-0192",
                    grade: 55,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "02/06/2021",
                    cDate: "05/07/2021"
                }, {
                    courseID: 4412,
                    courseName: "PTS-6123",
                    grade: 98,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "01/08/2011",
                    cDate: "05/01/2012"
                }, {
                    courseID: 7899,
                    courseName: "GOC-1122",
                    grade: 76,
                    teacher: "Mr.Lewis",
                    status: "Done",
                    sDate: "02/11/2019",
                    cDate: "03/02/2020"
                }
            ]
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value })
    }

    render() {
        let filteredCourses = this.state.courseTrans.filter(
            (course) => {
                return course.courseName.toLocaleLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div className="TForm">
                <h1 id="Title">Transcript</h1>
                <div id="searchSec">
                    <input type="text" placeholder="Search..." id="searchBar" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    <p />
                </div>


                <div className="course_Window">
                    {filteredCourses.map(courseInfo => {
                        return (
                            <div className="course_Specific">

                                <AboutPopUp /><h2>{courseInfo.courseName}</h2>
                                <span>Course Duration {courseInfo.sDate} - {courseInfo.cDate}<p>Course Status: {courseInfo.status}</p></span>

                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default Transcript