import React, { useState } from "react";
export default function Submition_Popup() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        //this whole section is done through a tutorial (I wanted to make it a little simpler for and more professional)
        <>
            <button className="mainBtn" onClick={toggleModal}>Submit</button>
            {modal && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h1 className="heading">Your inquery is submited</h1>
                            <p>Please wait 2-3 business days after submition for a memeber of staff to get back to you </p>
                            <button className="close-modal" onClick={toggleModal}>X</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

