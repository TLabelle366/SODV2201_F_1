class student_account {
  constructor(
    //Add student id
    username,
    password,
    firstname,
    middlename,
    lastname,
    email,
    dob,
    phone,
    department,
    programcode,
    dor
  ) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.email = email;
    this.dob = dob;
    this.phone = phone;
    this.department = department;
    this.programcode = programcode;
    this.dor = dor;
  }
}

export default student_account;