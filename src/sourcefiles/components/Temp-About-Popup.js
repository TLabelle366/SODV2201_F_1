import React, { useState } from "react";
export default function Submition_Popup() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        //this whole section is done through a tutorial (I wanted to make it a little simpler for and more professional)
        <>
            <button className="about_Btn" onClick={toggleModal}>❓</button>
            {modal && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h1 className="heading">About Course</h1>
                            <p>This is a temporary pop-up to explain what the course is about. </p>
                            <p>This includes the following items: </p>
                            <p className="customBR"></p>
                            <span className="spans">
                                Course ID <br />
                                Name<br />
                                Start and end dates<br />
                                Fees<br />
                                Grade received/status (Completed/In-Progress)<br />
                                Number of student in class (if not take)<br />
                                Brief Description of cours<br />
                            </span>
                            <p className="customBR"></p>
                            <button className="close-modal" onClick={toggleModal}>X</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
