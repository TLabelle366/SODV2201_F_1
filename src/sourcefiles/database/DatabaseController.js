export class DbController {
    constructor() {
        this.userData = [
            { "username": "t.labelle", 
                "password": "ThisPassword", 
                "firstname": "Tyler", 
                "middlename": "Austin", 
                "lastname": "Labelle", 
                "email": "t.labelle@gmail.com", 
                "dob": "April 5 1999", 
                "phone": "111 111 1111", 
                "department": "prog", 
                "programcode": "2fdsg", 
                "dor": "October 22 2021"
            },
            { "username": "j.stmichael", 
                "password": "ThisPassword", 
                "firstname": "Joseph", 
                "middlename": "", 
                "lastname": "StMichael", 
                "email": "j.stmichael@gmail.com", 
                "dob": "April 5 1999", 
                "phone": "111 111 1111", 
                "department": "prog", 
                "programcode": "2fdsg", 
                "dor": "October 22 2021"
            },
            { "username": "a.pokorskiy", 
                "password": "ThisPassword", 
                "firstname": "Alexandr", 
                "middlename": "", 
                "lastname": "Pokorskiy", 
                "email": "j.stmichael@gmail.com", 
                "dob": "April 5 1999", 
                "phone": "111 111 1111", 
                "department": "prog", 
                "programcode": "2fdsg", 
                "dor": "October 22 2021"
            }
        ];
        this.courseData = [
            { "courseID": 1234,
                "courseName": "SCP-001",
                "passinggrade": 50,
                "teacher": "Mr.Lewis",
                "status": "N/A",
                "sDate": "05/12/2021",
                "eDate": "08/20/2021",
                "credits": 3
            },
            { "courseID": 4560,
                "courseName": "MGMT-1500",
                "passinggrade": 50,
                "teacher": "Mr.Lewis",
                "status": "N/A",
                "sDate": "05/12/2021",
                "eDate": "08/20/2021",
                "credits": 3
            },
            { "courseID": 12323124,
                "courseName": "SCP-223",
                "passinggrade": 50,
                "teacher": "Mr.Lewis",
                "status": "N/A",
                "sDate": "05/12/2021",
                "eDate": "08/20/2021",
                "credits": 3
            },
            { "courseID": 4541560,
                "courseName": "MGMT-3500",
                "passinggrade": 50,
                "teacher": "Mr.Lewis",
                "status": "N/A",
                "sDate": "05/12/2021",
                "eDate": "08/20/2021",
                "credits": 3
            },
            { "courseID": 125534,
                "courseName": "SCP-120",
                "passinggrade": 50,
                "teacher": "Mr.Lewis",
                "status": "N/A",
                "sDate": "05/12/2021",
                "eDate": "08/20/2021",
                "credits": 3
            },
            { "courseID": 4541260,
                "courseName": "MGMT-4000",
                "passinggrade": 50,
                "teacher": "Mr.Lewis",
                "status": "N/A",
                "sDate": "05/12/2021",
                "eDate": "08/20/2021",
                "credits": 3
            }
        ];
    }

    getAllUsers() { return this.userData; }

    add(newuser) {
        this.userData.push(newuser);
    }

    getAllCourses() { return this.courseData; }
}