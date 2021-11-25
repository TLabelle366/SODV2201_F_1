import React from "react";
import Student from "./Objects/Studentodj"
import "./CssFiles/List.css"
import "./CssFiles/Programs.css"

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
    position:'relative',
    left:'30%'
}
class Program extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {      
        ViewProgram: "diploma",
            Students : [
                new Student(101102,"Joseph","Stmichael", "diploma"),
                new Student(101103,"Joseph","Stmichael", "diploma"),
                new Student(101104,"Joseph","Stmichael", "post-diploma"),
                new Student(101105,"Joseph","Stmichael", "post-diploma"),
                new Student(101106,"Joseph","Stmichael", "certificate"),
                new Student(101107,"Joseph","Stmichael", "certificate"),
                new Student(101108,"Joseph","Stmichael", "course-upgrade"),
                new Student(101109,"Joseph","Stmichael", "course-upgrade"),
                new Student(101111,"Joseph","Stmichael", "diploma"),
                new Student(101121,"Joseph","Stmichael", "diploma"),
                new Student(101131,"Joseph","Stmichael", "post-diploma"),
                new Student(101141,"Joseph","Stmichael", "post-diploma"),
                new Student(101151,"Joseph","Stmichael", "certificate"),
                new Student(101161,"Joseph","Stmichael", "certificate"),
                new Student(101171,"Joseph","Stmichael", "course-upgrade"),
                new Student(101181,"Joseph","Stmichael", "course-upgrade"),
            ]               
        }
        this.HandleClick = this.HandleClick.bind(this);
    // binds event listeneres to the component so they can reference it in code
    }

    // event handlers
    // tracks which course you are currently viewing the expanded information for 
    HandleClick(e) {
            this.setState({ViewProgram: e.target.value});
    }

  render() {
            return (
                <span className ="Mc">
                    <div className ="Mc2">
                        <div style ={NavS} id = "Nav-Bar" >
                            <ul style ={homnavstyle}>
                                <button onClick={(e)=> this.HandleClick(e)} value="diploma" className="NavBut"> diploma</button>
                                <button onClick={(e)=> this.HandleClick(e)} value="post-diploma"  className="NavBut"> post-diploma</button>
                                <button onClick={(e)=> this.HandleClick(e)} value ="certificate"  className="NavBut"> certificate</button>
                                <button onClick={(e)=> this.HandleClick(e)} value ="course-upgrade"  className="NavBut"> course-upgrade</button>
                            </ul>
                        </div>
                        <ul classname = "list">{
                            this.state.Students.map((StudentFill,i) => {
                                if(StudentFill.Program === this.state.ViewProgram){
                                        return (<li className="CLi"  key ={StudentFill.Sid}>
                                            <p className = "pProg">Sid: {StudentFill.Sid} Sname: {StudentFill.Fname}+{StudentFill.Lname} Program: {StudentFill.Program}</p>
                                            </li>)                            
                            }
                            else{ return null; }
                            })
                        }</ul>
                    </div>
                </span>
            );
        }
// records,saves and submits data for new coruses

}

export default Program;