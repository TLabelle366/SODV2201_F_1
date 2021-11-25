import React from 'react';
import SubmitionPop from "./components/Submit-Pop-up";

//Jo CSS
import './css/TEMPCSS/List.css';
import './css/TEMPCSS/ContactForm.css'

export class Contact extends React.Component {
    constructor(props) {
        super()
        this.state = {
            course: "Course(Optional)",
            topic: "Topic(Optional)"
        }
    }
    courseHandler = (event) => {
        this.setState({ course: event.target.value })
    }
    topicHandler = (event) => {
        this.setState({ topic: event.target.value })
    }

    render() {
        return (
            <div className="CForm">
                {/* In the contact form the user can fill out information relating to his question, and teh question itself. 
                    - Topic of the qustion
                    - Which Course it belongs to
                    - Question/inquiry 
                    - Prefered contact email to receive an answer on
                    
                    NOTE: DO NOT CHANGE DONT UNTIL TALKED WITH THE GROUP (looking at you morning alex)
                    */}
                <h1 id="Title">Cotnact Form</h1>
                <p>Please fill out as many fields as possible for the staff to best answer your question </p>
                <div className="innerWrap">
                    <div className="courseDrop">
                        {/* This is the course selection dropdown*/}
                        <select value={this.state.course} onChange={this.courseHandler}>
                            <option value="SCP-999">SCP-999</option>
                            <option value="SCP-001">SCP-001</option>
                            <option value="SCP-367">SCP-367</option>
                            <option value="IND-0811">IND-0811</option>
                            <option value="TECH-3303">TECH-3303</option>
                            <option value="TECH-2013">TECH-2013</option>
                            <option value="MGMT-4401">MGMT-4401</option>
                        </select>
                    </div>
                    <div className="topicDrop">
                        {/* This is the topic of the submission drop down*/}
                        <select value={this.state.topic} onChange={this.topicHandler}>
                            <option value="grade">Grades</option>
                            <option value="help">Course Help</option>
                            <option value="info">Course Information</option>
                        </select>
                    </div>
                    {/* This is the question input*/}
                    <textarea name="content" rows="2" cols="2" className="questionInput" placeholder="Question here..."></textarea>
                    <br />
                    {/* This is the email input*/}
                    <p>Email:<input type="email" placeholder="student@email.com" /> </p>
                </div>
                <div>
                    <SubmitionPop />
                </div>
            </div>
        );
    }
}

function CForm(Mid,StudentName,Program, MsgSubject,MsgContent) {
    this.Mid = Mid;
    this.StudentName =StudentName;
    this.MsgSubject = MsgSubject;
    this.MsgContent = MsgContent;
    this.HaveiBeenRead = false;
    this.readState= false;
    this.Program = Program;
}

var WReply = false;

export class AdminContact extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = 
    {
        OpenForm :"",       
        Cedit:false,
        ReplyingTo:new CForm(0,"","","",""),
        ContactForms : 
        [
            new CForm(1,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifh jsuidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(2,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifh jsuidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(3,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifh jsuidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(4,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifhj suidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(5,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduif hjsuidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(6,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifhj suidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(7,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifh jsuidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(9,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifhj suidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
            new CForm(8,"Joseph Stmichae","Diploma","Nothing Big","aghsbgsdhfashfuishgshjagoihg oifdjfoiajduighadiofjadfksgbhaduifhjsu idafhjuaishfiasf joisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfo iajduighadiofjadfksgbhaduifhjsui dafhjuaishfiasfjoisa jfoiajaghsbgsdhfashfuishgsh jagoihgoifdjfoiajduighadiofjadfksgbhaduifhj suidafhjuaishfiasfjoisajfoiajaghsbg sdhfashfuishgshjagoihgoifdjfoiajduighadiofjadf ksgbhaduifhjsuidafhjuaishfi asfjoisajfoiajaghsbgsdhfashfuish gshjagoihgoifdjfoiajduighadiofjad fksgbhaduifhjsuidafhjuaishfiasfjoisajfo iaj"),
        ]          
    }
    this.OpenMsg = this.OpenMsg.bind(this);
    this.DeleteMsg = this.DeleteMsg.bind(this);
    this.ReplyToMsg = this.ReplyToMsg.bind(this);
    this.CLoseReply =this.CLoseReply.bind(this);
}
DeleteMsg(e)
{
    console.log('deleting')
    var FillArray = [];
    for(var i =0; i<this.state.ContactForms.length;i++)
    {   
        if(this.state.ContactForms[i].Mid == e.target.value)
        {
            console.log('skipped');
            continue;
        }
       else{
           FillArray.push(this.state.ContactForms[i]);
       }
    }
    this.setState({ContactForms: FillArray});
}

OpenMsg(e)
{
    console.log('open called');
    console.log(e.target.value);

    var FillArray = [...this.state.ContactForms];
    console.log(FillArray);
    for(var i =0; i<FillArray.length;i++)
    {
        if(FillArray[i].Mid == e.target.value)
        {

            if(FillArray[i].readState === false)
            {
              
                if(FillArray[i].HaveiBeenRead === false)
                {
                    
                    FillArray[i].HaveiBeenRead= true;
                }
                FillArray[i].readState = true;
                console.log('Msg found');
                console.log(FillArray[i]);
            }
            else{
                FillArray[i].readState = false;
            }
            if(FillArray[i].HaveiBeenRead === false)
                {
                    
                    FillArray[i].HaveiBeenRead = true;
                }
        }
        else{
            FillArray[i].readState = false;
        }   

    }
    this.setState({ContactForms: FillArray});

}
CLoseReply(e)
{
   
           this.setState({ReplyingTo: new CForm(0,"","","","")});
           WReply = false;
}
ReplyToMsg(e)
{
    console.log("hi?")
    for(var i =0; i<this.state.ContactForms.length;i++)
    {   
        if(this.state.ContactForms[i].Mid == e.target.value)
        {
            console.log("msg found");
            console.log(" replying to " , this.state.ContactForms[i].Mid);
           this.setState({ReplyingTo: this.state.ContactForms[i]});
           console.log("reply set " ,this.state.ReplyingTo);
           WReply = true;
        }
    }
}
    render()
    {
            if(WReply === true)
            {
                return(
            
                    <span className ="Mc">
                    <div className ="Mc2">
                        
                            <ul classname = "list">{
                                this.state.ContactForms.map((FillForm) => {
                                   
                               
                                    return (<li className="CLi" key ={FillForm.Mid}>
                                    
                                    <p className = "title">
                                         Student Name:{FillForm.StudentName} 
                                         Student Progream:{FillForm.Program}
                                          Subject: {FillForm.MsgSubject}
                                     </p>
                                     <button className="MsgButton" onClick={(e) =>{this.OpenMsg(e)}} value={FillForm.Mid}>V</button>
                                 </li>)
                                 
                                })}
            </ul>
            <div className="ReplyBox" >
            
            <button className ="Rx" onClick = {(e)=>this.CLoseReply()}>X</button> 
               <p className="Rp"> Student Name:{this.state.ReplyingTo.StudentName} </p>         
               <p className="Rp"> Subject: RE {this.state.ReplyingTo.MsgSubject}</p>
              <textarea type="text" className="WriteMSgHere"></textarea>
              <button className ="Rbut" onClick = {(e)=>this.CLoseReply()}>Close</button>
            </div>
            </div>
            </span>)
            }
       
        return(
            
            <span className ="Mc">
            <div className ="Mc2">
                
                    <ul classname = "list">{
                        this.state.ContactForms.map((FillForm) => {
                           
                         if(FillForm.readState === true)
                         {
                            return (<li className="CLi" key ={FillForm.Mid}>
                                
                            <p className = "title">
                                 Student Name:{FillForm.StudentName} 
                                 Student Progream:{FillForm.Program}
                                  Subject: {FillForm.MsgSubject}
                             </p><button className="MsgButton" value={FillForm.Mid} onClick={(e)=>this.OpenMsg(e)}> 
                             V</button>
                             <div classname="Msgbox">
                                 <p className="contentP">{FillForm.MsgContent}</p><br></br>
                                 <button onClick={(e) => this.ReplyToMsg(e)} value={FillForm.Mid} className ="specificButts">Reply</button>
                                 <button onClick={(e) =>this.DeleteMsg(e)} value={FillForm.Mid}  className ="specificButts">Delete</button>
                            </div>
                             </li>);
                         }
                         else{
                            return (<li className="CLi" key ={FillForm.Mid}>
                            
                            <p className = "title">
                                 Student Name: {FillForm.StudentName} 
                                 Student Progream: {FillForm.Program}
                                  Subject: {FillForm.MsgSubject}
                             </p>
                             <button className="MsgButton" onClick={(e) =>{this.OpenMsg(e)}} value={FillForm.Mid}>V</button>
                         </li>)
                         }
                        })}
    </ul>
    
    </div>
    </span>)

}
}